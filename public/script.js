import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBu6pQ_fgC73WaYygaoUKz5-XE4ww9Lte0",
    authDomain: "mypollingapp-9a4c1.firebaseapp.com",
    projectId: "mypollingapp-9a4c1",
    storageBucket: "mypollingapp-9a4c1.appspot.com",
    messagingSenderId: "463744158045",
    appId: "1:463744158045:web:5739aa6731560b8b2cc0b4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');

window.signup = function (e) {
    e.preventDefault();
    let obj = {
        username: username.value,
        email: email.value,
        password: password.value
    }
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then(function (success) {
            alert("SignUp Successfully");
            window.location.href = "./pages/pollingApp/index.html";
        })
        .catch(function (err) {
            alert("The Email Is already Registered");
        })
};