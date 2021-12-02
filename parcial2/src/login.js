// Importar paquetes
// Configuracion de firebase
import {getFirebaseConfig} from './firebase-config.js';

// Modulos de firebase a utilizar
import { initializeApp } from 'firebase/app';
import {getAuth, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';

// Inicializar y configurar firebase
const firebaseConf = getFirebaseConfig();
const app = initializeApp(firebaseConf);
const auth = getAuth();

// Elementos de la página
const email = document.getElementById("email");
const password = document.getElementById("password");
const login_btn = document.getElementById("login_btn");

function login(e, ev){
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredentials) => {
        console.log(userCredentials);
        window.location.href = "index.html";
    })
    .catch((error) => {
        console.log(error.message);
    });
}

login_btn.addEventListener("click", login);

onAuthStateChanged(auth, (user_account)=>{
    if (user_account){
        // Hay usuario loguegado
        console.log("account", user_account);
        window.location.href = "index.html"
    }
});
