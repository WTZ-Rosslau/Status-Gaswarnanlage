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

// Array of keys to update
const keys = [
    "Messwert_AA", "Messwert_AB", "Messwert_AC", "Messwert_AD", "Messwert_AE", "Messwert_AF", "Messwert_AG", "Messwert_AH",
    "Alarmstatus1_AI", "Alarmstatus1_AJ", "Alarmstatus1_AK", "Alarmstatus1_AL", "Alarmstatus1_AM", "Alarmstatus1_AN", "Alarmstatus1_AO", "Alarmstatus1_AP",
    "Alarmstatus2_AQ", "Alarmstatus2_AR", "Alarmstatus2_AS", "Alarmstatus2_AT", "Alarmstatus2_AU", "Alarmstatus2_AV", "Alarmstatus2_AW", "Alarmstatus2_AX",
    "KanalStorung_BG", "KanalStorung_BH", "KanalStorung_BI", "KanalStorung_BJ", "KanalStorung_BK", "KanalStorung_BL", "KanalStorung_BM", "KanalStorung_BN",
    "Betriebsstatus_BO", "Betriebsstatus_BP", "Betriebsstatus_BQ", "Betriebsstatus_BR", "Betriebsstatus_BS", "Betriebsstatus_BT", "Betriebsstatus_BU", "Betriebsstatus_BV",
    "Alarmstatus3_AY", "Alarmstatus3_AZ", "Alarmstatus3_BA", "Alarmstatus3_BB", "Alarmstatus3_BC", "Alarmstatus3_BD", "Alarmstatus3_BE", "Alarmstatus3_BF"
];


// Set up a real-time listener for changes
onValue(dataRef, (snapshot) => {
    const data = snapshot.val();
    console.log("Received data from Firebase:", data); // Debugging log
    
    if (data) {
        const keys = [
            "Messwert_AA", "Messwert_AB", "Messwert_AC", "Messwert_AD", "Messwert_AE", "Messwert_AF", "Messwert_AG", "Messwert_AH",
            "Alarmstatus1_AI", "Alarmstatus1_AJ", "Alarmstatus1_AK", "Alarmstatus1_AL", "Alarmstatus1_AM", "Alarmstatus1_AN", "Alarmstatus1_AO", "Alarmstatus1_AP",
            "Alarmstatus2_AQ", "Alarmstatus2_AR", "Alarmstatus2_AS", "Alarmstatus2_AT", "Alarmstatus2_AU", "Alarmstatus2_AV", "Alarmstatus2_AW", "Alarmstatus2_AX",
            "KanalStorung_BG", "KanalStorung_BH", "KanalStorung_BI", "KanalStorung_BJ", "KanalStorung_BK", "KanalStorung_BL", "KanalStorung_BM", "KanalStorung_BN",
            "Betriebsstatus_BO", "Betriebsstatus_BP", "Betriebsstatus_BQ", "Betriebsstatus_BR", "Betriebsstatus_BS", "Betriebsstatus_BT", "Betriebsstatus_BU", "Betriebsstatus_BV"
        ];

        keys.forEach(key => {
            if (data[key] !== undefined && document.getElementById(key)) {
                document.getElementById(key).innerText = data[key];
            } else {
                console.log(`Missing data or element for: ${key}`);
            }
        });
    } else {
        console.log("No data found");
    }
});
