<template>
  <div class="first_exam">
    <div class="container">
      <div class="row justify-center">
        <div class="col-md-6">
          <form>
            <div class="form-group">
              <label for="namawarung">Nama Warung</label>
              <input type="text" class="form-control warung" id="namawarung" placeholder="Masukan nama warung" v-model="namawarung">
            </div>
            <div class="form-group">
              <label for="namapemilik">Nama Kasir</label>
              <input type="text" class="form-control warung" id="namapemilik" placeholder="Masukan nama kasir" v-model="namakasir">
            </div>
            <div class="form-group">
              <label for="namapemilik">Jumlah Porsi Nasi (Rp)</label>
              <input type="text" class="form-control warung" id="namapemilik" placeholder="Rp jumlah porsi nasi" v-model.number="nasi">
            </div>
            <div class="form-group">
              <label for="namapemilik">Jumlah Porsi Lauk (Rp)</label>
              <input type="text" class="form-control warung" id="namapemilik" placeholder="Rp jumlah porsi lauk" v-model.number="lauk">
            </div>
            <div class="form-group">
              <label for="namapemilik">Minum (Rp)</label>
              <input type="text" class="form-control warung" id="namapemilik" placeholder="Rp minuman" v-model.number="minum">
            </div>
            <button type="button" class="btn btn-primary" @click="tambahData()">Tambah Data</button>
          </form>
        </div>
      </div>
    </div>
    <table class="table mt-5">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Nama Warung</th>
          <th scope="col">Nama Kasir</th>
          <th scope="col">Nasi</th>
          <th scope="col">Lauk</th>
          <th scope="col">Minum</th>
          <th scope="col">Tanggal</th>
          <th scope="col">Total Harga</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, indeks) in tambah_data" :key="indeks">
          <th scope="row">{{indeks + 1}}</th>
          <td v-for="(values, keys) of item" :key="keys">
            {{values}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        namawarung:'',
        namakasir:'',
        nasi:0,
        minum:0,
        lauk:0,
        tanggal:Date.now("yyy/mm/dd"),
        tambah_data:[]
      }
    },
    methods:{
      tambahData(){
        let obj = {};
        obj.warung = this.namawarung;
        obj.kasir = this.namakasir;
        obj.nasi = this.nasi;
        obj.lauk = this.lauk;
        obj.minum = this.minum;
        obj.tanggal = this.tanggal;
        obj.total = this.nasi + this.lauk + this.minum;

        return this.tambah_data.push(obj);
      }
    },
  }
</script>

<style media="screen">
  .first_exam{
    width: 85%;
    padding: 20px;
    box-sizing: border-box;
    margin: auto;
  }

  .warung{
    width: 50%;
  }

  .foods{
    display: block;
  }
</style>
