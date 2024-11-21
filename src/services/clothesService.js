import { db } from "./firebase"; // Ensure this points to your Firebase setup file
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

const CLOTHES_COLLECTION = "clothes"; // Define the collection name

export const addClothing = async (clothing) => {
  try {
    const docRef = await addDoc(collection(db, CLOTHES_COLLECTION), clothing);
    console.log("Clothing added with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding clothing: ", error);
    throw error;
  }
};

export const deleteClothing = async (id) => {
  try {
    await deleteDoc(doc(db, CLOTHES_COLLECTION, id));
    console.log("Clothing deleted with ID: ", id);
  } catch (error) {
    console.error("Error deleting clothing: ", error);
    throw error;
  }
};

export const getAllClothing = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, CLOTHES_COLLECTION));
    const clothes = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Fetched all clothing items: ", clothes);
    return clothes;
  } catch (error) {
    console.error("Error fetching clothing items: ", error);
    throw error;
  }
};

export const getClothing = async (id) => {
  try {
    const docRef = doc(db, CLOTHES_COLLECTION, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const clothing = { id: docSnap.id, ...docSnap.data() };
      console.log("Fetched clothing item: ", clothing);
      return clothing;
    } else {
      console.log("No such clothing item found!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching clothing item: ", error);
    throw error;
  }
};
