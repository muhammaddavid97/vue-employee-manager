<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nama</th>
            <th scope="col">Email</th>
            <th scope="col">Mata Pelajaran</th>
            <th scope="col">Nilai</th>
            <th scope="col">Keterangan</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in Siswa" :key="item.key">
            <td>{{item.name}}</td>
            <td>{{item.email}}</td>
            <td>{{item.mapel}}</td>
            <td>{{item.nilai}}</td>
            <td>{{item.keterangan()}}</td>
            <td class="button">
              <router-link :to="'/edit/'+item.key" class="btn btn-primary">Edit</router-link>
              <button @click.prevent="deleteData(item.key)" class="btn btn-danger">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import {db} from '../firebaseDB.js';

  export default{
    data(){
      return{
        Siswa:[]
      }
    },
    created(){
      db.collection('siswa').onSnapshot((snapshotChange) => {
        this.Siswa = [];
        snapshotChange.forEach((doc) => {
          this.Siswa.push({
            key:doc.id,
            name:doc.data().nama,
            email:doc.data().email,
            mapel:doc.data().mapel,
            nilai:doc.data().nilai,
            keterangan: function(){
              if (doc.data().nilai >= 75){
                return 'Anda Lulus'
              }else{
                return 'Anda tidak lulus'
              }
            }
          })
        })
      })
    },
    methods:{
      deleteData(id){
        db.collection('siswa').doc(id).delete()
          .then(() => {
            alert("Data berhasil dihapus")
          })
          .catch(error => {
            console.log(error);
          })
      }
    }
  }
</script>

<style>
  .button {
     padding: 5px;
     margin-bottom: 17px;
  }

  .btn-danger{
    margin-left: 5px;
  }

  .btn-primary{
    margin-bottom: 12px;
  }
</style>
