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
    if (data) {
    const O_Messwert_AA = data.Messwert_AA;
    const O_Messwert_AB = data.Messwert_AB;
    const O_Messwert_AC = data.Messwert_AC;
    const O_Messwert_AD = data.Messwert_AD;
    const O_Messwert_AE = data.Messwert_AE;
    const O_Messwert_AF = data.Messwert_AF;
    const O_Messwert_AG = data.Messwert_AG;
    const O_Messwert_AH = data.Messwert_AH;

    // Display only the values (no "Value:" text)
    document.getElementById("Messwert_AA").innerText = O_Messwert_AA;
    document.getElementById("Messwert_AB").innerText = O_Messwert_AB;
    document.getElementById("Messwert_AC").innerText = O_Messwert_AC;
    document.getElementById("Messwert_AD").innerText = O_Messwert_AD;
    document.getElementById("Messwert_AE").innerText = O_Messwert_AE;
    document.getElementById("Messwert_AF").innerText = O_Messwert_AF;
    document.getElementById("Messwert_AG").innerText = O_Messwert_AG;
    document.getElementById("Messwert_AH").innerText = O_Messwert_AH;
} else {
    console.log("No data found");
}
});
