import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCvZdBl03OlZ1ouRv9ZXNy53JoBZXoqzAU",
  authDomain: "e-commerce-app-2c444.firebaseapp.com",
  projectId: "e-commerce-app-2c444",
  storageBucket: "e-commerce-app-2c444.appspot.com",
  messagingSenderId: "1021439605604",
  appId: "1:1021439605604:web:e7897a508f57477f479871",
  measurementId: "G-DBDP813D35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
