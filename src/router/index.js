import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/components/dashboard.vue";
import Edit from "@/components/edit_employee.vue";
import New from "@/components/new_employee.vue";
import View from "@/components/view_employee.vue";

Vue.use(VueRouter);
const routes = [
  {
    path:'/',
    name:'Dashboard',
    component:Dashboard
  },
  {
    path:'/create',
    name:'New',
    component:New
  },
  {
    path:'/edit/:employee_id',
    name:'Edit',
    component:Edit
  },
  {
    path:'/:employee_id',
    name:'View',
    component:View
  },
  {
    path:'*',
    redirect:'/'
  }
]

/// mebuat objek dari router nya
const router = new VueRouter({
  mode:'history',
  /// register routes path agar dapat di generate kedalam link
  routes
});

export default router;
