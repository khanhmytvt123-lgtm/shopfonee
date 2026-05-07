  const firebaseConfig = {
            apiKey: "AIzaSyBNtd-fy6wysaUcoGhNmd3zBf0l1Wdl46g",
            authDomain: "demo1-96a1c.firebaseapp.com",
            projectId: "demo1-96a1c",
            storageBucket: "demo1-96a1c.firebasestorage.app",
            messagingSenderId: "905693592220",
            appId: "1:905693592220:web:ed9040a494481503e50b59",
            measurementId: "G-CS8Z5LXKQP"
        };
        // Initialize Firebase
        const app = firebase.initializeApp(firebaseConfig);
        console.log("Firebase initialized", app.name);
        const db = firebase.firestore();

   