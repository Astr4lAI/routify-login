// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUGQsq6-q1FAuZsFvggZvluVzjOBn675I",
  authDomain: "routify-sign-in.firebaseapp.com",
  databaseURL: "https://routify-sign-in-default-rtdb.firebaseio.com",
  projectId: "routify-sign-in",
  storageBucket: "routify-sign-in.appspot.com",
  messagingSenderId: "871278043337",
  appId: "1:871278043337:web:99ad825a051806ee672d18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize variables
// const auth = firebase.auth();
// const database = firebase.database();


const submit = document.getElementById('submit');
submit.addEventListener("click", function(event) {
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // signed up
        const user = userCredential.user;
        alert("Creando cuenta...")
        window.location.href = "logged.html";
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ...
    });
})








// set up register function
// function register() {
//     // input fields
//     user = document.getElementById('user').value
//     email = document.getElementById('email').value
//     password = document.getElementById('password').value

//     // validate input fields
//     if (validate_email(email) == false || validate_password(password) == false) {
//         alert('Email o contraseña incorrectos')
//         return
//         // doesnt continue running the code
//     }
//     if (validate_field(user) == false) {
//         alert('Usuario incorrecto')
//         return
//     }



//     // auth
//     auth.createUser(email, password)
//     .then(function(){
//         var user = auth.currentUser

//         // add user to database
//         var database_ref = database.ref()

//         // create user data
//         var user_data = {
//             user : user,
//             email : email,
//             password : password,
//             last_login : Date.now()
//         }

//         // push to firebase
//         database_ref.child('users/' + user.uid).set(user_data)

//         // done
//         alert('Usuario creado exitosamente!')
//     })
//     .catch(function(error) {
//         // firebase alerts
//         var error_code = error.code
//         var error_message = error.message

//         alert(error_message)
//     })
// }


// // set up login function
// function login() {
//     // input fields
//     email = document.getElementById('email').value
//     password = document.getElementById('password').value

//     // validate input fields
//     if (validate_email(email) == false || validate_password(password) == false) {
//         alert('Email o contraseña incorrectas')
//         return
//     }
//     auth.signIn(email, password)
//     .then(function() {
//         var user = auth.currentUser

//         // add user to database
//         var database_ref = database.ref()

//         // create user data
//         var user_data = {
//             last_login : Date.now()
//         }

//         // push to firebase
//         database_ref.child('users/' + user.uid).update(user_data)

//         // done
//         alert('Usuario inicio sesión!')

//     })
//     .catch(function(error) {
//         // firebase alerts
//         var error_code = error.code
//         var error_message = error.message

//         alert(error_message)
//     })
// }


// function validate_email(email) {
//     expression = /^[^@]+@\w+(\.\w+)+\w$/.test(str);
//     if(expression.test(email) == true) {
//         // email is good
//         return true
//     } else {
//         // email is wrong
//         return false
//     }
// }

// function validate_password(password) {
//     // firebase only accepts lengths greater than 6
//     if (password < 6) {
//         return false
//     } else {
//         return true
//     }
// }

// function validate_field(field) {
//     if (field == null) {
//         return false
//     } 
//     if (field.length <= 0) {
//         return false
//     } else {
//         return true
//     }
// }