<script>
import { useRouter } from "vue-router";
import { addUser } from "../services/usersService";
import { reactive, ref } from "vue";
</script>

<script setup>
// Reactive object to store user input
const newUser = reactive({
  name: "",
  surname: "",
  nickname: "",
  address: "",
});

// Router instance for navigation
const router = useRouter();

// Redirect function
function redirectToHome() {
  router.push("/home");
}

// Function to handle user addition
async function handleAddUser() {
  try {
    const userId = await addUser({ ...newUser }); // Spread to ensure a plain object
    console.log("User added with ID:", userId);

    // Reset the form
    Object.keys(newUser).forEach((key) => (newUser[key] = ""));
    alert("User added successfully!");
  } catch (error) {
    console.error("Failed to add user:", error);
    alert("Failed to add user. Please try again.");
  }
}
</script>

<template>
  <form @submit.prevent="handleAddUser">
    <h1 class="lato-light">Wprowadź dane osoby:</h1>
    <div class="container addingUser-container rounded">
      <div class="col cols">
        <input
          type="text"
          class="form-control"
          placeholder="Imię"
          v-model="newUser.name"
          required
        />
      </div>
      <div class="col cols">
        <input
          type="text"
          class="form-control"
          placeholder="Nazwisko"
          v-model="newUser.surname"
          required
        />
      </div>
      <div class="form-group cols">
        <input
          type="text"
          class="form-control"
          id="inputNickname"
          placeholder="Ksywka"
          v-model="newUser.nickname"
        />
      </div>
      <div class="form-group cols">
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="Adres"
          v-model="newUser.address"
        />
      </div>
    </div>
    <div class="container">
      <div class="col">
        <button type="submit" class="btn btn-secondary btn-first">Dodaj</button>
        <button
          type="button"
          class="btn btn-secondary btn-second"
          @click="redirectToHome"
        >
          Wróć
        </button>
      </div>
    </div>
  </form>
</template>

<style scoped>
.btn {
  border-color: rgb(36, 107, 174);
  border-width: 2px;
}

.btn-first:hover {
  background-color: rgb(68, 174, 36);
  border-color: rgb(1, 15, 29);
  border-width: 2px;
}

.btn-second:hover {
  background-color: rgb(177, 20, 20);
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

.btn {
  height: 55px;
  width: 30%;
  font-size: 1em;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 20px;
}

.form-control {
  border-color: rgb(36, 107, 174);
  border-width: 3px;
  width: 400px;
  height: 45px;
  margin-bottom: 30px;
  font-family: "Calibri";
  font-size: large;
  border-radius: 8px;
}

.lato-light {
  color: rgb(36, 107, 174);
  margin-bottom: 50px;
  font-size: 40px;
}
</style>
