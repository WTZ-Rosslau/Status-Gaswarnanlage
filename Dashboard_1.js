 // Import necessary Firebase modules
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
        import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

        // Your Firebase configuration (should be the same as your Firebase Console settings)
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
        const dataRef = ref(database, 'real_time_data');

        // Set up a real-time listener for changes
        onValue(dataRef, (snapshot) => {
            const data = snapshot.val(); // Retrieve data from the snapshot
            if (data) {
                const value = data.value;    // Access the 'value' field

                // Display the 'value' on your webpage (e.g., in a div with id 'valueDisplay')
                document.getElementById("valueDisplay").innerText = `Value: ${value}`;
            } else {
                console.log("No data found");
            }
        });
