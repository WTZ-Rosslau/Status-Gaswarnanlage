// Firebase configuration (replace with your Firebase project config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Reference to the data in Firebase
const dataRef = ref(database, 'real_time_data');

// Function to fetch data from Firebase and update the page
function fetchData() {
  get(dataRef).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      document.getElementById('value').textContent = data.value;
      document.getElementById('text').textContent = data.text;
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error("Error getting data:", error);
  });
}

// Fetch data once when the page loads
fetchData();

// Optionally, refresh data every 5 seconds to get updates in real-time
setInterval(fetchData, 5000); // Fetch data every 5 seconds
