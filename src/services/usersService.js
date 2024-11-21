import { db } from "../firebaseConfig"; // Ensure you have your Firebase configuration exported here
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

// Firestore collection name
const USERS_COLLECTION = "users";

export const addUser = async (user) => {
  try {
    const docRef = await addDoc(collection(db, USERS_COLLECTION), user);
    console.log("User added with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding user: ", error);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    await deleteDoc(doc(db, USERS_COLLECTION, userId));
    console.log("User deleted with ID: ", userId);
  } catch (error) {
    console.error("Error deleting user: ", error);
    throw error;
  }
};

export const findAllUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, USERS_COLLECTION));
    const users = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("All users: ", users);
    return users;
  } catch (error) {
    console.error("Error fetching all users: ", error);
    throw error;
  }
};

export const findUserById = async (userId) => {
  try {
    const docRef = doc(db, USERS_COLLECTION, userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const user = { id: docSnap.id, ...docSnap.data() };
      console.log("User found: ", user);
      return user;
    } else {
      console.log("No user found with ID: ", userId);
      return null;
    }
  } catch (error) {
    console.error("Error finding user: ", error);
    throw error;
  }
};
