<template>
  <div class="create">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <h3 class="text-center">Tambah Data Siswa</h3>
        <form @submit.prevent="onUpdateForm()">
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
            <button type="submit" class="btn btn-primary btn-block">Ubah Data Siswa</button>
          </div>
      </form>
    </div>
   </div>
  </div>
</template>

<script>
  import {db} from '../firebaseDB.js';

  export default{
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
    created(){
      let dbRef = db.collection('siswa').doc(this.$route.params.id);
      dbRef.get().then(doc => {
        if (doc.exists){
          this.siswa = doc.data();
        }else{
          console.log("Data tidak ditemukan");
        }
      })
      .catch(error => {
        console.log(error);
      })
    },
    methods:{
      onUpdateForm(){
        let dbUpdate = db.collection('siswa').doc(this.$route.params.id);
        dbUpdate.update(this.siswa).then(() => {
          console.log("Data berhasil di update");
          this.$router.push('/list')
        })
        .catch(error => {
          console.log(error);
        });
      }
    }
  }
</script>
