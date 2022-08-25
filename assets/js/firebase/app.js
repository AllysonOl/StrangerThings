  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCDloqV66dIbfkR7fmJjd_tJ5su3UDd6AA",
    authDomain: "semanafrontend-mundo-invertido.firebaseapp.com",
    projectId: "semanafrontend-mundo-invertido",
    storageBucket: "semanafrontend-mundo-invertido.appspot.com",
    messagingSenderId: "40944974661",
    appId: "1:40944974661:web:0a8847a541639cb4e31c2c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export default app;
