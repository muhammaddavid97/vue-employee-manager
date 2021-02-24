<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-md-6">
        <h3 class="text-center">Edit Employee</h3>
      </div>
    </div>
    <div class="row justify-content-md-center mt-5">
      <div class="col-md-6">
        <form @submit.prevent="updateProfile()">
          <div class="form-group">
            <label for="id_user">ID User#</label>
            <input type="text" name="id" id="id_user" class="form-control" v-model="employees.employee_id" disabled required>
          </div>
          <div class="form-group">
            <label for="id_user">Name</label>
            <input type="text" name="id" id="id_user" class="form-control" v-model="employees.name" required>
          </div>
          <div class="form-group">
            <label for="id_user">Department</label>
            <input type="text" name="id" id="id_user" class="form-control" v-model="employees.dept" required>
          </div>
          <div class="form-group">
            <label for="id_user">Position</label>
            <input type="text" name="id" id="id_user" class="form-control" v-model="employees.position" required>
          </div>
          <button type="submit" class="btn btn-success">Edit Data</button>
          <router-link to="/" class="btn btn-secondary canceled">Cancel</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {db} from "../firebaseDB/firebaseDB.js";
  export default{
    name:'edit_employee',
    data(){
      return{
        employees:{}
      }
    },
    created(){
      //mengambil data dari dokumen dimana data yang ditampilkan sesuai dengan kriteria tertentu
      //dalam hal ini data ditampilkan sesuai dengan id nya
      db.collection("employee").where('employee_id', '==', this.$route.params.employee_id).get()
        .then(querySnapshot => {
          this.Employees = [];
          querySnapshot.forEach(doc => {
            this.employees = doc.data();
          })
          console.log(this.Employees);
        })
        .catch(err => {
          console.log(err.message);
        });
    },
    methods:{
      updateProfile(){
        db.collection("employee").where("employee_id", "==", this.$route.params.employee_id).get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.update(this.employees)
                .then(() => {
                  this.$toast.success("Data berhasil di perbaharui", {
                       type:'success',
                       position:'top-right',
                       duration:3000,
                       dismissible:true
                  });
                  this.$router.replace({name:'View'});
                })
                .catch(err => console.log(err.message));
            })
          })
          .catch(err => console.log(err.message));
      }
    }
  }
</script>

<style lang="css">
  form .canceled{
    float: right;
  }
</style>
