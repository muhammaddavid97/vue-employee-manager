import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/views/Home.vue';
import Create from '@/components/create_data.vue';
import List from '@/components/list_data.vue';
import Edit from '@/components/edit_data.vue';

Vue.use(VueRouter);
const routes = [
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/create',
    name:'create',
    component:Create
  },
  {
    path:'/list',
    name:'list',
    component:List
  },
  {
    path:'/edit/:id',
    name:'edit',
    component:Edit
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
