<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <Navbar />
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-md-12 mt-5">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from "@/views/Navbar.vue";

  export default{
    components:{Navbar}
  }
</script>
