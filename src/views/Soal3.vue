<template>
  <div class="soal3">
    <h2>Soal 1</h2>
    <div v-for="(item, indeks) in soal1" :key="indeks">
      <ul>
        <li v-for="(values, keys) in item" :key="keys">
          {{values}}
        </li>
      </ul>
    </div>
    <h2>Soal 2</h2>
    <div v-for="(item, indeks) in soal2" :key="indeks">
      <ul>
        <li v-for="(values, keys) in item" :key="keys">
          {{values}}
        </li>
      </ul>
    </div>
    <h2>Soal 3</h2>
    <div v-for="(item, indeks) in soal3" :key="indeks">
      <ul>
        <li v-for="(values, keys) in item" :key="keys">
          {{values}}
        </li>
      </ul>
    </div>
    <h2>Soal 4</h2>
    <div v-for="(item, indeks) in soal4" :key="indeks">
      <ul>
        <li v-for="(values, keys) in item" :key="keys">
          {{values}}
        </li>
      </ul>
    </div>
    <h2>Soal 5</h2>
    <div v-for="(item, indeks) in soal5" :key="indeks">
      <ul>
        <div v-for="(values, keys) in item.tags" :key="keys">
          <div v-if="values === 'brown'">
            <li>
              {{item}}
            </li>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
  import mock2 from '../product/mock2.json';

  export default{
    name:'Soal3',
    data(){
      return{
        mock2
      }
    },
    computed:{
      soal1(){
        return this.mock2.filter(item => {
          return item.placement.name === "Meeting Room"
        });
      },
      soal2(){
        return this.mock2.filter(item => {
          return item.type === "electronic"
        });
      },
      soal3(){
        return this.mock2.filter(item => {
          return item.type === "furniture"
        });
      },
      soal4(){
        return this.mock2.filter(item => {
          return new Date(item.purchased_at).toString() === Date.parse("January 16, 2020");
        });
      },
      soal5(){
        return this.mock2.filter(item => {
          return item
        });
      },
    }
  }
</script>
