<template>
  <div class="create">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <h3 class="text-center">Tambah Data Siswa</h3>
        <form @submit.prevent="onSubmitForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Masukan nama siswa" v-model="siswa.nama" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Masukan email siswa" v-model="siswa.email" required>
          </div>
          <select class="custom-select" v-model="siswa.mapel">
            <option selected>Masukan Mata Pelajaran</option>
            <option v-for="(item, indeks) in matapelajaran" :key="indeks" :value="item.value">
              {{item.text}}
            </option>
          </select>
          <div class="form-group">
            <label for="name">Nilai</label>
            <input type="text" class="form-control" id="name" placeholder="Masukan nilai siswa" v-model.number="siswa.nilai" required>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">Tambah Data Siswa</button>
          </div>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
  import {db} from '../firebaseDB.js';

  export default{
    name:'create_data',
    data(){
      return{
        siswa:{},
        matapelajaran:[
          {text:'Bahasa Indonesia', value:'bahasa Indonesia'},
          {text:'Matematika', value:'matematika'},
          {text:'Fisika', value:'fisika'},
          {text:'Kimia', value:'kimia'},
          {text:'Biologi', value:'biologi'},
        ]
      }
    },
    methods:{
      onSubmitForm(){
        //menambahkan document kedalam database dengan method add()
        db.collection('siswa').add(this.siswa)
          .then(() => {
            alert("Data siswa berhasil ditambahkan !!");
            this.$router.push('/list')
            this.siswa.nama = '',
            this.siswa.email = '',
            this.siwa.mapel = this.matapelajaran.value;
            this.siswa.nilai = 0,
            this.siswa.keterangan = this.keteranganLulus();
          })
          .catch(error => {
            console.log(error);
          });
      },
    }
  }
</script>

<style media="screen">
  .btn-primary{
    margin-top: 20px;
  }
</style>
