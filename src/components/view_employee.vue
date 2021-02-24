<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-md-6">
        <ul class="list-group">
          <div v-for="employee in Employees" :key="employee.key">
            <li class="list-group-item"><h4>{{employee.name}}</h4></li>
            <li class="list-group-item">EmployeeID: #{{employee.employee_id}}</li>
            <li class="list-group-item">Department : {{employee.dept}}</li>
            <li class="list-group-item">Position : {{employee.position}}</li>
            <router-link to="/" class="btn btn-secondary back-btn">Back</router-link>
            <button type="button" @click="deleteData(employee.employee_id)" class="btn btn-danger delete-btn">Delete</button>
            <div class="row fixed-bottom justify-content-md-end btn-edit">
              <router-link :to="'/edit/'+employee.employee_id" class="btn btn-primary rounded-circle"><i class="fas fa-pencil-alt"></i></router-link>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {db} from "../firebaseDB/firebaseDB.js";
  export default{
    name:'view_employee',
    data(){
      return{
        Employees:[]
      }
    },
    created(){
      //mengambil data dari dokumen dimana data yang ditampilkan sesuai dengan kriteria tertentu
      //dalam hal ini data ditampilkan sesuai dengan id nya
      db.collection("employee").where('employee_id', '==', this.$route.params.employee_id).get()
        .then(querySnapshot => {
          this.Employees = [];
          querySnapshot.forEach(doc => {
            const dataEmployees = {
              key:doc.id,
              employee_id:doc.data().employee_id,
              name:doc.data().name,
              dept:doc.data().dept,
              position:doc.data().position
            }
            this.Employees.push(dataEmployees);
          })
          console.log(this.Employees);
        })
        .catch(err => {
          console.log(err.message);
        })
    },
    methods:{
      deleteData(id){
        db.collection("employee").where('employee_id', '==', id).get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              if (window.confirm("Apakah anda ingin hapus ?")){
                doc.ref.delete().then(() => {
                  this.$toast.success("Data berhasil dihapus", {
                       type:'success',
                       position:'top-right',
                       duration:3000,
                       dismissible:true
                  });
                  this.$router.replace({name:'Dashboard'});
                })
              }
            });
          })
      }
    }
  }
</script>

<style lang="css">
  .back-btn, .delete-btn{
    width: 15%;
    margin-top: 15px;
  }

  .delete-btn{
    float: right;
  }
</style>
