import {
    initializeApp
} from 'firebase/app';
import {
    getDatabase,
    ref,
    set,
    onValue,
    push
} from 'firebase/database';
import {
    getAuth,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirebaseConfig
} from './firebase-config';
import {
    userCard
} from './user-card';

// Inicializar firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);
const auth = getAuth();

const nombre = document.getElementById("nom");
const codigo = document.getElementById("cod");
const curso = document.getElementById("cur");

const logout_btn = document.getElementById("logout_btn");
const userList2 = document.getElementById("userslist2");
const num = 0;

function getUsuarios() {

    const db = getDatabase();
    const dbRef = ref(db, 'libro');
    onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        // console.log("lista", data);
        actualizarLista(data);
    });

}

function logout(e, ev) {
    auth.signOut()
        .then(() => {
            window.location.href = "login.html";
        })
        .catch((error) => {
            console.log(error.message);
        });
}
logout_btn.addEventListener("click", logout);

function actualizarLista(info) {
    if (info) {
        userList2.innerHTML = "";
        Object.keys(info).forEach((k, index) => {

            console.log("Objeto", info[k])
            const card = new userCard(info[k])

            userList2.appendChild(card.render());
        });

    } else {
        userList2.innerHTML = "No hay usuarios registrados";
    }
}



const registroEvento = (e, event) => {
    //console.log("ejecutó evento")
    const libro = {
        nombre: nom.value,
        numero: num,
        promedio: prompt,
    }
    registrarUsuario(libro)
}

onAuthStateChanged(auth, (user_account)=>{
    if (user_account){

getUsuarios();
}else{
window.location.href = "login.html";
}
});