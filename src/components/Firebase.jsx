import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzWJ8YiB49MD9pW5g32LoUJAqOHCMc7xw",
  authDomain: "entcarepat.firebaseapp.com",
  projectId: "entcarepat",
  storageBucket: "entcarepat.appspot.com",
  messagingSenderId: "905428335454",
  appId: "1:905428335454:web:59da8c26efef3fc7b92dcf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const dbase = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { dbase, storage, auth, analytics, app as default };
