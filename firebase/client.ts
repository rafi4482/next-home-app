import { initializeApp, getApps } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { FirebaseStorage, getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6XVbQWN7C81hPFb_m0u6j-_49-PJhZDo",
  authDomain: "next-homes-app.firebaseapp.com",
  projectId: "next-homes-app",
  storageBucket: "next-homes-app.firebasestorage.app",
  messagingSenderId: "346366325832",
  appId: "1:346366325832:web:dee29ae0f766b2be3f547d"
};

// Initialize Firebase
const currentApps = getApps();
let auth: Auth;
let storage: FirebaseStorage;

if (!currentApps.length) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  storage = getStorage(app);
} else {
  const app = currentApps[0];
  auth = getAuth(app);
  storage = getStorage(app);
}

export { auth, storage };