import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCZkennHD_3-eWpeEZbJCBkdRlLV4_i7GI",
  authDomain: "my-ecommerce-project-72c67.firebaseapp.com",
  projectId: "my-ecommerce-project-72c67",
  storageBucket: "my-ecommerce-project-72c67.appspot.com",
  messagingSenderId: "752767832042",
  appId: "1:752767832042:web:a5c54a5a9324be27032c93",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider)