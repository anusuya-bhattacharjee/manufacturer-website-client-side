// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQfLmjNM5_hxzmOb2ZjTvpy5FBN73XosY",
  authDomain: "manufacturer-tools-project.firebaseapp.com",
  projectId: "manufacturer-tools-project",
  storageBucket: "manufacturer-tools-project.appspot.com",
  messagingSenderId: "79633669896",
  appId: "1:79633669896:web:43a971a40120a43a7e96bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;