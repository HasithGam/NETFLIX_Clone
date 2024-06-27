// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3WreYJVa3HP8W31vfNExFOEL6uWjvUoI",
    authDomain: "hasithgam-netflix-clone.firebaseapp.com",
    projectId: "hasithgam-netflix-clone",
    storageBucket: "hasithgam-netflix-clone.appspot.com",
    messagingSenderId: "777334991843",
    appId: "1:777334991843:web:248e904e65d53720cc8ed6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
    } catch (err) {
        console.log(err);
        alert(err);
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
        console.log(err);
        alert(err);
    }
}

const logout = () => {
    signOut(auth);
}

export { auth, db, login, signUp, logout }