// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // For Firestore

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXEnWw5xEZe2aGuX75zvxN5kK2plrclFE",
  authDomain: "reader-den.firebaseapp.com",
  projectId: "reader-den",
  storageBucket: "reader-den.appspot.com",
  messagingSenderId: "1095797005868",
  appId: "1:1095797005868:web:ecde8b2d8a13996358fb89",
  measurementId: "G-8SJE5Y37V4",
  databaseURL: "https://reader-den-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it
export const db = getFirestore(app); // Export the Firestore instance
