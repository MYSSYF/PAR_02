const firebaseConfig = {
    apiKey: "AIzaSyBoIzGqNZuWIPLrE9Fs7kJ083W5S6cPvcA",
    authDomain: "parci2.firebaseapp.com",
    projectId: "parci2",
    storageBucket: "parci2.appspot.com",
    messagingSenderId: "731332358485",
    appId: "1:731332358485:web:fd55cc326e2d233b9cffdc",
    measurementId: "G-V9J6NQ6DMP"
  };
export function getFirebaseConfig(){
    if (!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    } else {
        return firebaseConfig;
    }
}
