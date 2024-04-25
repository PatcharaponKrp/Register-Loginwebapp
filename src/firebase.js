import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYjaJ85bkJpXaIikEAXWQFqa9uXNNsrIM",
  authDomain: "register-login-863b6.firebaseapp.com",
  projectId: "register-login-863b6",
  databaseURL:
    "https://register-login-863b6-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "register-login-863b6.appspot.com",
  messagingSenderId: "220441273750",
  appId: "1:220441273750:web:0ffaf1301099bf320e69b7",
  measurementId: "G-GPX23KPBD8",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
