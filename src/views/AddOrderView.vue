<script>
import { useRouter } from "vue-router";
import { addOrder } from "../services/ordersService";
import { reactive, ref } from "vue";
</script>

<script setup>
// Reactive object to store user input
const newOrder = reactive({
  name: "",
  person: "",
  size: "",
  status: "Zamówione",
});

// State to control the visibility of the success popup
const showSuccessPopup = ref(false);

// Router instance for navigation
const router = useRouter();

// Redirect function
function redirectToHome() {
  router.push("/home");
}

// Function to handle user addition
async function handleAddOrder() {
  try {
    const orderId = await addOrder({ ...newOrder }); // Spread to ensure a plain object
    console.log("Order added with ID:", orderId);

    // Show the success popup
    showSuccessPopup.value = true;

    // Hide the popup after 3 seconds
    setTimeout(() => {
      showSuccessPopup.value = false;
    }, 3000);

    // Reset the form
    Object.keys(newOrder).forEach((key) => (newOrder[key] = ""));
  } catch (error) {
    console.error("Failed to add order:", error);
    alert("Failed to add order. Please try again.");
  }
}
</script>

<template>
  <form @submit.prevent="handleAddOrder">
    <h1 class="lato-light">Wprowadź nazwę:</h1>

    <div class="container addingOrder-container rounded">
      <div class="person-field-wrapper">
        <input
          type="text"
          class="form-control el1"
          placeholder="Osoba"
          v-model="newOrder.person"
          required
        />
      </div>
      <div class="item-field-wrapper">
        <input
          type="text"
          class="form-control el2"
          placeholder="Nazwa"
          v-model="newOrder.name"
          required
        />

        <input
          type="text"
          class="form-control el3"
          id="inputSize"
          placeholder="Rozmiar"
          v-model="newOrder.size"
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

  <!-- Success Popup -->
  <div v-if="showSuccessPopup" class="wrapper">
    <svg
      class="checkmark"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
    >
      <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
      <path
        class="checkmark__check"
        fill="none"
        d="M14.1 27.2l7.1 7.2 16.7-16.8"
      />
    </svg>
  </div>
</template>

<style scoped>
.item-field-wrapper {
  display: flex;
  width: 40vw;
  min-width: 400px;
  gap: 0.4rem;
}
.el1 {
  flex: 1;
}
.person-field-wrapper {
  display: flex;
  width: 40vw;
  min-width: 400px;
}

.el2 {
  flex: 8;
}

.el3 {
  flex: 2;
}

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
  width: 40vw;
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

/* ----------- */

.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #7ac142;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  stroke-miterlimit: 10;
  margin: 10% auto;
  box-shadow: inset 0px 0px 0px #7ac142;
  animation: fill 0.4s ease-in-out 0.4s forwards,
    scale 0.3s ease-in-out 0.9s both;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #7ac142;
  }
}
</style>
