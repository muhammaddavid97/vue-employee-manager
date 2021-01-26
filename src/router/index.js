import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/views/Home.vue';
import Soal1 from '@/views/Soal1.vue';
import Soal2 from '@/views/Soal2.vue';
import Soal3 from '@/views/Soal3.vue';


Vue.use(VueRouter);
const routes = [
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/soal1',
    name:'Soal1',
    component:Soal1
  },
  {
    path:'/soal2',
    name:'Soal2',
    component:Soal2
  },
  {
    path:'/soal3',
    name:'Soal3',
    component:Soal3
  }
]

/// mebuat objek dari router nya
const router = new VueRouter({
  mode:'history',
  /// register routes path agar dapat di generate kedalam link
  routes
});

export default router;
