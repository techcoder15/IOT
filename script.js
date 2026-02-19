// Firebase imports (MODULAR SDK – REQUIRED for GitHub Pages)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// 🔥 Your Firebase configuration
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

// Database reference
const ledRef = ref(database, "led/state");

// UI elements
const statusText = document.getElementById("status");
const toggleBtn = document.getElementById("toggleBtn");

// 🔁 Listen for LED state changes
onValue(ledRef, (snapshot) => {
  const state = snapshot.val();

  statusText.innerText = "Status: " + state;

  if (state === "ON") {
    toggleBtn.classList.add("on");
    toggleBtn.classList.remove("off");
    toggleBtn.innerText = "TURN OFF";
  } else {
    toggleBtn.classList.add("off");
    toggleBtn.classList.remove("on");
    toggleBtn.innerText = "TURN ON";
  }
});

// 🔘 Toggle LED state
toggleBtn.addEventListener("click", () => {
  const newState = statusText.innerText.includes("ON") ? "OFF" : "ON";
  set(ledRef, newState);
});
