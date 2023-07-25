// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyABKaMo8jJoxFQU2t_XSUi_jRAQUu9_rE0",
    authDomain: "eshop-f660f.firebaseapp.com",
    projectId: "eshop-f660f",
    storageBucket: "eshop-f660f.appspot.com",
    messagingSenderId: "117034127211",
    appId: "1:117034127211:web:6a47fdf41e015cd1a4c62e",
    measurementId: "G-R7307KMZJ1"
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

// Use these for db & auth
const auth = firebase.auth()

export { db, auth }; 