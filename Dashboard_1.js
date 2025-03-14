// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCygiSFB24M3pkyBA3d_zY_kKtQKxtvetE",
    authDomain: "stand-7.firebaseapp.com",
    databaseURL: "https://stand-7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "stand-7",
    storageBucket: "stand-7.firebasestorage.app",
    messagingSenderId: "943950957452",
    appId: "1:943950957452:web:87e3865fa6e62283be64a9",
    measurementId: "G-M2DPSGFEKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

// Reference to the 'real_time_data' node in Firebase
const dataRef = ref(database, 'Preufstand7');

// Set up a real-time listener for changes
onValue(dataRef, (snapshot) => {
    const data = snapshot.val(); // Retrieve data from the snapshot
    console.log("Data received from Firebase:", data); // Log the received data
    if (data) {
        const value = data.Messwert_AA;    // Access the 'value' field
        console.log("Messwert_AA value:", value); // Log the value

        // Display only the value (no "Value:" text)
        const element = document.getElementById("Messwert_AA");
        if (element) {
            element.innerText = value;
        } else {
            console.log("Element with id 'Messwert_AA' not found");
        }
    } else {
        console.log("No data found");
    }
});
