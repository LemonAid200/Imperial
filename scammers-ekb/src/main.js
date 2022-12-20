import { createApp } from 'vue'
import App from './App.vue'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd2W0SI_gL6kRb46aEolvjYRhRNg2V1LE",
  authDomain: "scammers-ekb.firebaseapp.com",
  projectId: "scammers-ekb",
  storageBucket: "scammers-ekb.appspot.com",
  messagingSenderId: "214361514149",
  appId: "1:214361514149:web:35953379c07ba338296d4c",
  measurementId: "G-TD0ZK8YQQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


createApp(App).mount('#app')


console.log(analytics)