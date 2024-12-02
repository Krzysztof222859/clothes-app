<script setup>
// import HelloWorld from "./components/HelloWorld.vue";

// import { db } from "./firebaseConfig";
// import { collection, getDocs, addDoc } from "firebase/firestore";
</script>

<template>
  <nav>
    <router-link to="/home">Home</router-link> |
    <router-link to="/addorder">Add Order</router-link> |
    <router-link to="/clothesordered">Clothes Ordered</router-link> |
    <router-link to="/clothesgiven">Clothes Given</router-link> |
  </nav>
  <router-view style="padding-top: 0px;"/>
</template>

<!-- <style scoped>
 .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>  -->

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>