<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

</script>

<template>
  <div class="container">
    
    <h1 class="logo">Clothes App</h1>
    <h2 class="lato-light primary-text">Wybierz czynność:</h2>
    <div class="container-mt-12">
      <button type="button" class="btn btn-secondary btn-first" @click="router.push({name: 'adduser'})">
        Dodaj użytkownika
      </button>
      <h2 style="font-size: 15px;">---</h2>
      <button type="button" class="btn btn-secondary btn-second" @click="router.push({name: 'assignclothes'})">
        Przypisz ubrania
      </button>
      <h2 style="font-size: 15px;">---</h2>
      <button type="button" class="btn btn-secondary btn-second" @click="router.push({name: 'userslist'})">
        Pobierz listę użytkowników
      </button>
      <h2 style="font-size: 15px;">---</h2>
      <button type="button" class="btn btn-secondary btn-second" @click="router.push({name: 'clotheslist'})">
        Pobierz listę ubrań
      </button>
    </div>
  </div>
</template>
  
<style scoped>

.flashcard-font {
    font-family: 'Chewy'; font-size: 30px;
    margin-bottom: 50px;
}

</style>