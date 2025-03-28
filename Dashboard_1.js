// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK5uMJd0MTQ3h2U9q_ruJaiGx7oRpZ-Mw",
  authDomain: "gaswarnanlagen.firebaseapp.com",
  databaseURL: "https://gaswarnanlagen-default-rtdb.firebaseio.com",
  projectId: "gaswarnanlagen",
  storageBucket: "gaswarnanlagen.firebasestorage.app",
  messagingSenderId: "881593415946",
  appId: "1:881593415946:web:052c801ab179e1f26022f3",
  measurementId: "G-3N9FV1RM2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

// Reference to the 'real_time_data' node in Firebase
const dataRef = ref(database, 'Preufstand7');

// Array of keys to update
const new_keys = [
   "Zeit_Datum_A_2" ,"Zeit_Datum_A_1" ,"Messwert_AA_1", "Messwert_AA_2", "Messwert_AB_1", "Messwert_AB_2", "Messwert_AC_1", "Messwert_AC_2", "Messwert_AD_1", "Messwert_AD_2",
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

// Function to update the status cell based on timestamp difference
function updateStatusCell(data) {
    const currentTime = Date.now(); // Get current time in milliseconds

    if (data.TimeStamp !== undefined) {
        const timeStamp = parseFloat(data.TimeStamp) * 1000; // Convert timestamp to milliseconds
        const timeDifference = (currentTime - timeStamp) / 1000; // Difference in seconds

        console.log(`Current Time: ${currentTime}`);
        console.log(`Timestamp: ${timeStamp}`);
        console.log(`Time Difference: ${timeDifference} seconds`);

        const statusCell = document.getElementById('status-cell'); // Assuming 'status-cell' is the ID of the cell to update
        const lightCell = document.getElementById('light-cell'); // Assuming 'light-cell' is the ID of the light indicator cell

        if (statusCell && lightCell) {
            if (timeDifference > 20) {
                statusCell.innerText = 'inaktiv';
                lightCell.classList.remove('green-light');
                lightCell.classList.add('red-light');
                console.log("Status updated to inaktiv");
            } else {
                statusCell.innerText = 'aktiv';
                lightCell.classList.remove('red-light');
                lightCell.classList.add('green-light');
                console.log("Status updated to aktiv");
            }
        } else {
            console.log("Missing status cell or light cell element");
        }
    } else {
        console.log("No timestamp found");
    }
}

// Listen for changes in the dataRef
onValue(dataRef, (snapshot) => {
    const data = snapshot.val();

    if (data) {
        new_keys.forEach(key => {
            if (data[key] !== undefined && document.getElementById(key)) {
                // Update the text of the table cell
                const cell = document.getElementById(key);
                cell.innerText = data[key];

                // Only apply color change to Alarmstatus1, Alarmstatus2, Alarmstatus3, and KanalStorung
                if (key.includes("Alarmstatus") || key.includes("KanalStorung")) {
                    // Example threshold value for changing the cell color
                    const threshold = 1;

                    // Ensure the value is a number before comparison
                    const value = parseFloat(data[key]);

                    if (!isNaN(value)) {
                        if (value >= threshold) {
                            // Add the red background color class if the value exceeds the threshold
                            cell.classList.add('red-cell');
                        } else {
                            // Remove the red background color if the value is below the threshold
                            cell.classList.remove('red-cell');
                        }
                    }
                }
            } else {
                console.log(`Missing data or element for: ${key}`);
            }
        });

        // Update the status cell based on timestamp difference
        updateStatusCell(data);
    } else {
        console.log("No data found");
    }
});

// Periodically check the timestamp and update the status cell
setInterval(() => {
    onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            updateStatusCell(data);
        }
    });
}, 1000); // Check every second
