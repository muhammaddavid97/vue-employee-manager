<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-md-6">
        <h3 class="text-center">New Employee</h3>
      </div>
    </div>
    <div class="row justify-content-md-center mt-5">
      <div class="col-md-6">
        <form @submit.prevent="saveEmployee()">
          <div class="form-group">
            <label for="id_user">ID User#</label>
            <input type="text" name="id" id="id_user" class="form-control" v-model="employees.employee_id" required>
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
          <button type="submit" class="btn btn-primary">Add Data</button>
          <router-link to="/" class="btn btn-secondary canceled">Cancel</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {db} from "../firebaseDB/firebaseDB.js";
  export default{
    name:'new_employee',
    data(){
      return{
        employees:{}
      }
    },
    methods:{
      saveEmployee(){
        db.collection("employee").add(this.employees)
          //ketika kondisi resolve maka kita akan menambahkan data ke cloud firestore
          //sesuai dengan nilai dari inputan user
          .then(() => {
              this.employees.employee_id = "",
              this.employees.name = "",
              this.employees.dept = "",
              this.employees.position = ""
              this.$toast.success("Data berhasil ditambahkan", {
               type:'success',
               position:'top-right',
               duration:3000,
               dismissible:true
          });
              //setelah berhasil ditambahkan akan redirect ke halaman dashboard
              this.$router.replace({name:'Dashboard'});
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
