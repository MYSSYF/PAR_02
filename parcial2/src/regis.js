// Importar paquetes
// Configuracion de firebase
import {getFirebaseConfig} from './firebase-config.js';

// Modulos de firebase a utilizar
import { initializeApp } from 'firebase/app';
import {getDatabase, ref, set} from 'firebase/database';
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';

// Inicializar y configurar firebase
const firebaseConf = getFirebaseConfig();
const app = initializeApp(firebaseConf);
const db = getDatabase();
const auth = getAuth();

// Elementos de la página
const email = document.getElementById("email");
const username = document.getElementById("username");
const edad = document.getElementById("edad");
const password = document.getElementById("password");
const signup_btn = document.getElementById("signup_btn");

// Agregar eventos
function regis(e, ev){
    // Crear la cuenta del usuario
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((user_credential) => {
        console.log(user_credential);
        const user = {
            "id": user_credential.user.uid,
            "email":  email.value,
            "username": username.value,
            "edad": edad.value,
            "password": password.value
        }

        const dbRef = ref(db, "parci/users/"+user.id);
        set(dbRef, user).then(() => {
            console.log("guardó");
            window.location.href = "index.html";
        });
    })
    .catch((error) => {
        console.log(error.message);
    });
}

signup_btn.addEventListener("click", regis);

onAuthStateChanged(auth, (user_account)=>{
    if (user_account){
        // Hay usuario loguegado
        console.log("account", user_account);
        window.location.href = "index.html"
    }
});
