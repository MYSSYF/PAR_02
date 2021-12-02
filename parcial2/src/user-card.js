import {
    getDatabase,
    ref,
    set,
    onValue,
    push,
    update,
    child
} from 'firebase/database';

export class userCard {
    constructor(user) {
        this.user = user;
    }

    render() {
        let card = document.createElement("div");
        card.className = "user-card";

        let title = document.createElement("h3");
        title.className = "user-card-title";
        title.innerHTML = this.user.nombre;

        let numer = document.createElement("num");
        numer.className = "numero";
        numer.innerHTML = Math.round( (this.user.numero/this.user.promedio)*100)/100;

        let masBtn = document.createElement("button");
        masBtn.className = "user-card-plus";
        masBtn.innerHTML = "+";
        masBtn.addEventListener("click", (e, ev) => {
            const db = getDatabase();
            const userRef = ref(db, 'libra/' + this.user.id);
            // escribir un nuevo usuario
            update(ref(db, 'libro/' + this.user.id), {
                numero: 0,
                promedio:0
            })

        });

        let OnestarBtn = document.createElement("button");
        OnestarBtn.className = "user-card-StarOne";
        OnestarBtn.innerHTML = "★";
        OnestarBtn.addEventListener("click", (e, ev) => {
            const db = getDatabase();
            const userRef = ref(db, 'libra/' + this.user.id);
            // escribir un nuevo usuario
            update(ref(db, 'libro/' + this.user.id), {
                numero: this.user.numero+1,
                promedio:this.user.promedio+1
            })

        });
        let TwostarBtn = document.createElement("button");
        TwostarBtn.className = "user-card-StarTwo";
        TwostarBtn.innerHTML = "★";
        TwostarBtn.addEventListener("click", (e, ev) => {
            const db = getDatabase();
            const userRef = ref(db, 'libra/' + this.user.id);
            // escribir un nuevo usuario
            update(ref(db, 'libro/' + this.user.id), {
                numero: this.user.numero+2,
                promedio:this.user.promedio+1
            })
        });
        let TrestarBtn = document.createElement("button");
        TrestarBtn.className = "user-card-StarTre";
        TrestarBtn.innerHTML = "★";
        TrestarBtn.addEventListener("click", (e, ev) => {
            const db = getDatabase();
            const userRef = ref(db, 'libra/' + this.user.id);
            // escribir un nuevo usuario
            update(ref(db, 'libro/' + this.user.id), {
                numero: this.user.numero+3,
                promedio:this.user.promedio+1
            })
        });
        let TetrastarBtn = document.createElement("button");
        TetrastarBtn.className = "user-card-StarTetra";
        TetrastarBtn.innerHTML = "★";
        TetrastarBtn.addEventListener("click", (e, ev) => {
            const db = getDatabase();
            const userRef = ref(db, 'libra/' + this.user.id);
            // escribir un nuevo usuario
            update(ref(db, 'libro/' + this.user.id), {
                numero: this.user.numero+4,
                promedio:this.user.promedio+1
            })
        });
        let PentastarBtn = document.createElement("button");
        PentastarBtn.className = "user-card-StarPenta";
        PentastarBtn.innerHTML = "★";
        PentastarBtn.addEventListener("click", (e, ev) => {
            const db = getDatabase();
            const userRef = ref(db, 'libra/' + this.user.id);
            // escribir un nuevo usuario
            update(ref(db, 'libro/' + this.user.id), {
                numero: this.user.numero+5,
                promedio:this.user.promedio+1
            })
        });

        card.appendChild(title);
        card.appendChild(numer);
        card.appendChild(masBtn);
        card.appendChild(OnestarBtn);
        card.appendChild(TwostarBtn);
        card.appendChild(TrestarBtn);
        card.appendChild(TetrastarBtn);
        card.appendChild(PentastarBtn);
        return card;
    }


}