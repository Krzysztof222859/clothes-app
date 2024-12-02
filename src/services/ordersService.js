import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

const ORDERS_COLLECTION = "orders"; // Define the collection name

export const addOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, ORDERS_COLLECTION), order);
    console.log("Order added with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding order: ", error);
    throw error;
  }
};

export const deleteOrder = async (id) => {
  try {
    await deleteDoc(doc(db, ORDERS_COLLECTION, id));
    console.log("Order deleted with ID: ", id);
  } catch (error) {
    console.error("Error deleting order: ", error);
    throw error;
  }
};

export const getAllOrders = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, ORDERS_COLLECTION));
    const orders = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return orders;
  } catch (error) {
    console.error("Error getting orders: ", error);
    throw error;
  }
};

export const getOrderById = async (id) => {
  try {
    const docRef = await getDoc(doc(db, ORDERS_COLLECTION, id));
    if (docRef.exists()) {
      return { id: docRef.id, ...docRef.data() };
    } else {
      throw new Error("No such order!");
    }
  } catch (error) {
    console.error("Error getting order: ", error);
    throw error;
  }
};
