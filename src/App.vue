<template>
  <div id="app">
    <nav class="navbar navbar-light bg-primary justify-content-between">
      <div class="container">
        <router-link to="/" class="navbar-brand text-white" href="#">Home</router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link to="/create" class="nav-link text-white pr-3">Tambah Data Siswa</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/list" class="nav-link pr-3 text-white">Daftar Siswa</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
