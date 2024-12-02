<script>
import { ref, onMounted } from "vue";
import { getAllOrders } from "../services/ordersService";
</script>

<script setup>
// List to store clothes with status "Zamówione"
const orderedClothes = ref([]);

// Fetch orders and filter clothes with status "Zamówione" on component mount
onMounted(async () => {
  try {
    const orders = await getAllOrders();
    orderedClothes.value = orders.filter(
      (order) => order.status === "Zamówione"
    );
  } catch (error) {
    console.error("Error fetching orders: ", error);
  }
});
</script>

<template>
  <div>
    <h1 class="lato-light">Zamówione Ubrania</h1>
    <div class="container ordered-clothes-container rounded">
      <ul>
        <li v-for="order in orderedClothes" :key="order.id">
          <p><strong>Person:</strong> {{ order.person }}</p>
          <p><strong>Name:</strong> {{ order.name }}</p>
          <p><strong>Size:</strong> {{ order.size }}</p>
          <p><strong>Status:</strong> {{ order.status }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.ordered-clothes-container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.ordered-clothes-container ul {
  list-style-type: none;
  padding: 0;
}

.ordered-clothes-container li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.ordered-clothes-container li:last-child {
  border-bottom: none;
}
</style>
