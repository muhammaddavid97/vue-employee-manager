<template>
  <div id="dashboard">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <ul class="list-group">
            <li class="list-group-item">
              <h4 class="text-center">Employees</h4>
            </li>
            <li class="list-group-item d-flex justify-content-between" v-for="employee in employees" :key="employee.id">
              <div>
                <span class="badge badge-pill badge-secondary">{{employee.dept}}</span>
                {{employee.employee_id}} : {{employee.name}}
              </div>
              <router-link :to="'/'+employee.employee_id" class=""><i class="far fa-eye"></i></router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row fixed-bottom justify-content-md-end">
      <router-link to="/create" class="btn btn-primary rounded-circle"><i class="fas fa-plus plus-fonted"></i></router-link>
    </div>
  </div>
</template>

<script>
  import {db} from "../firebaseDB/firebaseDB.js";

  export default{
    name:'dashboard',
    data(){
      return{
        //variable ini akan digunakan untuk menampung data dari cloud firestore
        employees:[]
      }
    },
    created(){
      const storeEmployee = db.collection("employee").orderBy("dept");
      storeEmployee.get().then(querySnapshot => {
        this.employees = [];
        querySnapshot.forEach(doc => {
          let dataEmployee = new Map();
          dataEmployee.set("id", doc.id);
          dataEmployee.set("employee_id", doc.data().employee_id);
          dataEmployee.set("name", doc.data().name);
          dataEmployee.set("dept", doc.data().dept);
          dataEmployee.set("position", doc.data().position);

          //tambahkan data kedalam objek array
          this.employees.push(Object.fromEntries(dataEmployee));
        })
      })
    },
  }
</script>


<style lang="css">
#dashboard{
  width: 100%;
}
.rounded-circle{
  width: 40px;
  height: 40px;
  margin-bottom: 50px;
  margin-right: 120px;
}
</style>
