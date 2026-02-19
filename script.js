// Firebase imports (MODULAR)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Your Firebase config (SAFE for frontend)
const firebaseConfig = {
  apiKey: "AIzaSyBgrz2ux4J0mO9haVVwc6PaCrJ4ftkZrMw",
  authDomain: "iot-workshop-11604.firebaseapp.com",
  databaseURL: "https://iot-workshop-11604-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iot-workshop-11604",
  storageBucket: "iot-workshop-11604.firebasestorage.app",
  messagingSenderId: "1056573121883",
  appId: "1:1056573121883:web:630cdab34687ce8fee667e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Reference to LED state
const ledRef = ref(database, "led/state");

// UI Elements
const statusText = document.getElementById("status");
const toggleBtn = document.getElementById("toggleBtn");

// 🔁 Live update from Firebase
onValue(ledRef, (snapshot) => {
  const state = snapshot.val();
  statusText.innerText = "Status: " + state;
});

// 🔘 Button click
toggleBtn.addEventListener("click", () => {
  const currentState = statusText.innerText.includes("ON") ? "ON" : "OFF";
  set(ledRef, currentState === "ON" ? "OFF" : "ON");
});
