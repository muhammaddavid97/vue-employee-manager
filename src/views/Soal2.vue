<template>
  <div class="soal2">
    <h2>Soal 1</h2>
    <ul>
      <li v-for="(item, indeks) in soal1" :key="indeks">
        {{item.username}}
      </li>
    </ul>
    <hr>
    <h2>Soal 2</h2>
    <div v-for="(items, indeks) in soal2" :key="indeks">
      <ul>
        <li v-for="(item, indeks) in items" :key="indeks">
          {{item}}
        </li>
      </ul>
    </div>
    <h2>Soal 3</h2>
    <div v-for="(items, indeks) in soal3" :key="indeks">
      <ul>
        <div v-for="(values, keys) in items" :key="keys">
          <div v-if="values">
            <li>{{values}}</li>
          </div>
          <div v-else>
            <p>Data tidak ditemuka</p>
          </div>
        </div>
      </ul>
    </div>
    <h2>Soal 4</h2>
    <div v-for="(items, indeks) in soal4" :key="indeks">
      <ul>
        <li v-for="(item, indeks) in items" :key="indeks">
          {{item}}
        </li>
      </ul>
    </div>
    <h2>Soal 5</h2>
    <div v-for="(items, indeks) in soal5" :key="indeks">
      <ul>
        <li v-for="(item, indeks) in items" :key="indeks">
          {{item}}
        </li>
      </ul>
    </div>
    <h2>Soal 6</h2>
    <div v-for="(items, indeks) in soal6" :key="indeks">
      <ul>
        <li v-for="(item, keys) in items" :key="keys">
          {{item.title}} : {{item.title.includes("Tips")}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import mock from '../product/mock.json';

  export default{
    data(){
      return{
        mock,
        judul:[]
      }
    },
    computed:{
      soal1(){
        return this.mock.filter(item => {
          return item.profile.phones.length === 0;
        });
      },
      soal2(){
        return this.mock.filter(item => {
          return item.articles.length === 0
        })
      },
      soal3(){
        return this.mock.filter(item => {
          return item.profile.full_name.includes("annis");
        })
      },
      soal4(){
        return this.mock.filter(item => {
          return new Date(item.articles.published_at).getFullYear().toString() === new Date("2020");
        });
      },
      soal5(){
        return this.mock.filter(item => {
          return new Date(item.profile.birthday).getFullYear().toString() === "1986";
        });
      },
      soal6(){
        const d = this.mock.map(item => item.articles);

        return d;
      }
    }
  }
</script>
