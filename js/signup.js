import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBCbNeK7KKKh1sDZ6twR70L82q0rQ0HxiQ",
    authDomain: "pollapp-dd33a.firebaseapp.com",
    projectId: "pollapp-dd33a",
    storageBucket: "pollapp-dd33a.appspot.com",
    messagingSenderId: "245929043847",
    appId: "1:245929043847:web:a9acdd0b60fd0e930c5522"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app);



//----- New Registration code start	  
document.getElementById("register").addEventListener("click", () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    //For new registration
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            alert("Registration successfully!!");
            window.location.href = "./page/index.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorMessage);
            alert(error);
        });
});
