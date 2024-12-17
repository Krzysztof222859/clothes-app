<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="container">
    <h1 class="logo">Clothes Appp</h1>
    <h2 class="lato-light primary-text">Wybierz czynność:</h2>
    <div class="container-mt-12">
      <button
        type="button"
        class="btn btn-secondary btn-first"
        @click="router.push({ name: 'addorder' })"
      >
        Dodaj zamówienie
      </button>
      <h2 style="font-size: 15px">---</h2>
      <button
        type="button"
        class="btn btn-secondary btn-second"
        @click="router.push({ name: 'clothesordered' })"
      >
        Lista zamówionych ubrań
      </button>
      <h2 style="font-size: 15px">---</h2>
      <button
        type="button"
        class="btn btn-secondary btn-fourth"
        @click="router.push({ name: 'clothesgiven' })"
      >
        Lista wydanych ubrań
      </button>
    </div>
  </div>
</template>

<style scoped>
.btn {
  /* background-color: rgb(36, 107, 174); */
  border-color: rgb(36, 107, 174);
  border-width: 2px;
}

.btn:hover {
  background-color: rgb(36, 107, 174);
  /* color: rgb(36, 107, 174); */
  border-color: rgb(1, 15, 29);
  border-width: 2px;
}

.logo {
  font-family: "Chewy";
  font-size: 50px;
  margin: 40px 0px;
  background: -webkit-linear-gradient(315deg, #41bc85 25%, #354fce);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 10px;
}

.lato-light {
  /* font-family: 'Chewy';  */
  color: rgb(36, 107, 174);
  margin-bottom: 50px;
}

.btn {
  width: 90%;
  height: 55px;
  font-size: 1em;
  /* font-family: 'Lato'; */
  margin-left: auto;
  margin-right: auto;
}
</style>
