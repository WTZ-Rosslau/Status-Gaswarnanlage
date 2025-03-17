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
const new_keys = [
    "Messwert_AA_1", "Messwert_AA_2", "Messwert_AB_1", "Messwert_AB_2", "Messwert_AC_1", "Messwert_AC_2", "Messwert_AD_1", "Messwert_AD_2",
    "Messwert_AE_1", "Messwert_AE_2", "Messwert_AF_1", "Messwert_AF_2", "Messwert_AG_1", "Messwert_AG_2", "Messwert_AH_1", "Messwert_AH_2",
    "Alarmstatus1_AI_1", "Alarmstatus1_AI_2", "Alarmstatus1_AJ_1", "Alarmstatus1_AJ_2", "Alarmstatus1_AK_1", "Alarmstatus1_AK_2", "Alarmstatus1_AL_1", "Alarmstatus1_AL_2",
    "Alarmstatus1_AM_1", "Alarmstatus1_AM_2", "Alarmstatus1_AN_1", "Alarmstatus1_AN_2", "Alarmstatus1_AO_1", "Alarmstatus1_AO_2", "Alarmstatus1_AP_1", "Alarmstatus1_AP_2",
    "Alarmstatus2_AQ_1", "Alarmstatus2_AQ_2", "Alarmstatus2_AR_1", "Alarmstatus2_AR_2", "Alarmstatus2_AS_1", "Alarmstatus2_AS_2", "Alarmstatus2_AT_1", "Alarmstatus2_AT_2",
    "Alarmstatus2_AU_1", "Alarmstatus2_AU_2", "Alarmstatus2_AV_1", "Alarmstatus2_AV_2", "Alarmstatus2_AW_1", "Alarmstatus2_AW_2", "Alarmstatus2_AX_1", "Alarmstatus2_AX_2",
    "KanalStorung_BG_1", "KanalStorung_BG_2", "KanalStorung_BH_1", "KanalStorung_BH_2", "KanalStorung_BI_1", "KanalStorung_BI_2", "KanalStorung_BJ_1", "KanalStorung_BJ_2",
    "KanalStorung_BK_1", "KanalStorung_BK_2", "KanalStorung_BL_1", "KanalStorung_BL_2", "KanalStorung_BM_1", "KanalStorung_BM_2", "KanalStorung_BN_1", "KanalStorung_BN_2",
    "Betriebsstatus_BO_1", "Betriebsstatus_BO_2", "Betriebsstatus_BP_1", "Betriebsstatus_BP_2", "Betriebsstatus_BQ_1", "Betriebsstatus_BQ_2", "Betriebsstatus_BR_1", "Betriebsstatus_BR_2",
    "Betriebsstatus_BS_1", "Betriebsstatus_BS_2", "Betriebsstatus_BT_1", "Betriebsstatus_BT_2", "Betriebsstatus_BU_1", "Betriebsstatus_BU_2", "Betriebsstatus_BV_1", "Betriebsstatus_BV_2",
    "Alarmstatus3_AY_1", "Alarmstatus3_AY_2", "Alarmstatus3_AZ_1", "Alarmstatus3_AZ_2", "Alarmstatus3_BA_1", "Alarmstatus3_BA_2", "Alarmstatus3_BB_1", "Alarmstatus3_BB_2",
    "Alarmstatus3_BC_1", "Alarmstatus3_BC_2", "Alarmstatus3_BD_1", "Alarmstatus3_BD_2", "Alarmstatus3_BE_1", "Alarmstatus3_BE_2", "Alarmstatus3_BF_1", "Alarmstatus3_BF_2"
];

// Set up a real-time listener for changes
// Your Firebase configuration and other setup code remains the same







// Set up a real-time listener for changes
onValue(dataRef, (snapshot) => {
    const data = snapshot.val();
    const statusCell = document.getElementById('status-cell');

    if (data && data.timestamp) {
        const currentTime = Date.now(); // Get the current time in milliseconds
        const timeDifference = currentTime - data.timestamp; // Difference in milliseconds

        console.log('Current Time:', currentTime);
        console.log('Data Timestamp:', data.timestamp);
        console.log('Time Difference:', timeDifference);

        // Check if the data was updated within the last 10 seconds
        if (timeDifference <= 10000) {
            statusCell.innerText = "aktiv"; // Active within the last 10 seconds
        } else {
            statusCell.innerText = "nicht aktiv"; // Not active
        }
    } else {
        statusCell.innerText = "nicht aktiv"; // No data or no timestamp
    }

    // Update the table cells for the keys
    if (data) {
        new_keys.forEach(key => {
            if (data[key] !== undefined && document.getElementById(key)) {
                const cell = document.getElementById(key);
                cell.innerText = data[key];

                // Apply color change to Alarmstatus and KanalStorung keys
                if (key.includes("Alarmstatus") || key.includes("KanalStorung")) {
                    const threshold = 80;
                    const value = parseFloat(data[key]);

                    if (!isNaN(value)) {
                        if (value >= threshold) {
                            cell.classList.add('red-cell'); // Add red background
                        } else {
                            cell.classList.remove('red-cell'); // Remove red background
                        }
                    }
                }
            } else {
                console.log(`Missing data or element for: ${key}`);
            }
        });
    } else {
        console.log("No data found");
    }
});
    } else {
        console.log("No data found");
    }
});

