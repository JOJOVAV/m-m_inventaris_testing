<template>
    <div class="Dashboard">
      <router-link class="a" :to="{name: 'Dashboard'}"><h1>{{title}}</h1></router-link>
      <!-- <h1>Dashboard</h1> -->
      
      <nav>
    <router-link :to="{name: 'MateriaalHome'}">Materiaal</router-link> |
    <router-link :to="{name: 'LinksHome'}">Shortlinks/Qr-code</router-link>
    <!-- <router-link to="/terug-brengen">Terug Brengen</router-link> -->
  </nav>
  <router-view />
    </div>
  </template>

<script>
// @ is an alias to /src
// 
export default {
    name: 'Dashboard',

  data() {
    return {
      title: 'Dashboard'
      
    };

  }
}
</script>

<style>

.a {
  text-decoration: none;
}


</style>