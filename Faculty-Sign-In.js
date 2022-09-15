const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD5EyZ-m4i8SxGyRXD_CelkdyNbr-c44V4",
    authDomain: "iskan-ako.firebaseapp.com",
    databaseURL: "https://iskan-ako-default-rtdb.firebaseio.com",
     projectId: "iskan-ako",
     storageBucket: "iskan-ako.appspot.com",
     messagingSenderId: "752384818289",
    appId: "1:752384818289:web:1051e459b1439d2e2e6fd0",
    measurementId: "G-LRK3RR07JJ"
  });
     
      const db = firebaseApp.firestore();
      const auth = firebaseApp.auth();
      // Initialize Firebase
  
      const signIn = () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        // firebase code
        firebase.auth().signInWithEmailAndPassword(email, password)
        
            .then((result) => {
                // Signed in 
                //document.write("You are Signed In")
                window.location.href="Samp-Faculty.html";
                console.log(result)
            })
            .catch((error) => {
              alert
              alert("WRONG PASSWORD");
            });
    }
  
    