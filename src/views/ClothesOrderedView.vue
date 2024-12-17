<script>
import { ref, onMounted } from "vue";
import { getAllOrders } from "../services/ordersService";
import { changeOrderStatus } from "../services/ordersService";
</script>

<script setup>
// List to store clothes with status "Zamówione"
const orderedClothes = ref([]);

const changeStatus = async (id) => {
  try {
    await changeOrderStatus(id);
    // Update the local state to reflect the change
    location.reload();
  } catch (error) {
    console.error("Failed to change order status:", error);
    alert("Failed to change order status. Please try again.");
  }
};

// Fetch orders and filter clothes with status "Zamówione" on component mount
onMounted(async () => {
  try {
    const orders = await getAllOrders();
    orderedClothes.value = orders
      .filter((order) => order.status === "Zamówione")
      .sort((a, b) => a.person.localeCompare(b.person)); // Sortowanie alfabetyczne po "Osoba"
  } catch (error) {
    console.error("Error fetching orders: ", error);
  }
});
</script>

<template>
  <div>
    <h1 class="lato-light">Zamówione ubrania:</h1>
    <div class="container ordered-clothes-container rounded">
      <!-- Header Row -->
      <div class="header-row">
        <div class="header-field">Osoba</div>
        <div class="header-field">Produkt</div>
        <div class="header-field">Rozmiar</div>
        <div class="header-field">Status</div>
      </div>
      <!-- Data Rows -->
      <div v-for="order in orderedClothes" :key="order.id" class="order-row">
        <div class="order-field">{{ order.person }}</div>
        <div class="order-field">{{ order.name }}</div>
        <div class="order-field">{{ order.size }}</div>
        <div class="order-field">
          <button @click="changeStatus(order.id)">Zmień status</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

/* Global header styling */
.lato-light {
  color: rgb(36, 107, 174);
  margin-bottom: 50px;
  font-size: 32px; /* Reduced for better mobile display */
  text-align: center;
  letter-spacing: 1px;
}

/* Container styling */
.ordered-clothes-container {
  padding: 20px;
  background-color: #e8f4fc; /* Light blue background */
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 132%; /* Kontener zajmuje 90% szerokości strony */
  max-width: 432px;
}

/* Header row styling */
.header-row {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
  background-color: rgb(36, 107, 174); /* Dark blue for header */
  color: white;
  font-weight: bold;
  padding: 15px;
  border-radius: 8px;
  gap: 10px;
  max-width: 400px;
}

.header-field {
  flex: 1;
  text-align: center;
  font-size: 16px;
}

/* Styling each data row */
.order-row {
  display: flex;
  flex-wrap: wrap; /* Ensure proper wrapping */
  align-items: center;
  gap: 0px;
  padding: 15px;
  border: 1px solid #d0e6f3;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  max-width: 400px;
}

.order-row:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  border-color: rgb(36, 107, 174);
}

/* Individual field styling */
.order-field {
  flex: 1; /* Allow fields to take equal space */
  min-width: 100px; /* Prevent fields from shrinking too much */
  text-align: center;
  font-size: 16px;
  line-height: 1.5; /* Prevent overlapping text */
  color: #34495e;
}

.status {
  font-weight: bold;
}

.status.active {
  color: #27ae60; /* Green for active */
}

.status.pending {
  color: #e67e22; /* Orange for pending */
}

.status.delivered {
  color: #2980b9; /* Blue for delivered */
}

/* Responsive design */
@media (max-width: 392px) {
  .header-row,
  .order-row {
    flex-direction: column; /* Stack items vertically on small screens */
    gap: 15px;
    text-align: left;
  }

  .header-field,
  .order-field {
    flex: none; /* Disable flex-grow for better alignment */
    width: 100%; /* Take full width */
    text-align: left; /* Align text to the left for better readability */
  }

  .lato-light {
    font-size: 28px; /* Adjust header size for mobile */
  }
}

</style>