// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkS3D0_hinOpo1kvkB8hlZAC_QgJFqZ4A",
  authDomain: "smart-home-app-41725.firebaseapp.com",
  databaseURL:
    "https://smart-home-app-41725-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "smart-home-app-41725",
  storageBucket: "smart-home-app-41725.appspot.com",
  messagingSenderId: "123697789438",
  appId: "1:123697789438:web:ca2e395dc7abca93fee8af",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
export { auth };
