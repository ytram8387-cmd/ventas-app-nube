import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD-Nvye_LfZYtKjmQpKze8vFe6413_YI0M",
    authDomain: "ventas-app-pro-e79d1.firebaseapp.com",
    projectId: "ventas-app-pro-e79d1",
    storageBucket: "ventas-app-pro-e79d1.firebasestorage.app",
    messagingSenderId: "626312936837",
    appId: "1:626312936837:web:bb8ecd7923e20dc623d8ec"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// REGISTRO
window.registrar = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Usuario registrado correctamente");
    window.location.href = "login.html";
  } catch (error) {
    alert("Error: " + error.message);
  }
};

// LOGIN
window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login exitoso");
    window.location.href = "ventas.html";
  } catch (error) {
    alert("Error: " + error.message);
  }
};