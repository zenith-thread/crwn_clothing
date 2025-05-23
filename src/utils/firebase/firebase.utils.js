import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOqjcsn9msmT-wosd3dNyz-d5vt_6AhTA",
  authDomain: "crwn-clothing-2df6f.firebaseapp.com",
  projectId: "crwn-clothing-2df6f",
  storageBucket: "crwn-clothing-2df6f.firebasestorage.app",
  messagingSenderId: "740334741677",
  appId: "1:740334741677:web:8a4112a554b8a4a25afe24",
  measurementId: "G-ZT8MNQNHE1",
};

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocumentReference = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocumentReference);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocumentReference, { displayName, email, createdAt });
      alert("Successfully created the user!");
    } catch (err) {
      console.log("Error creating the user,", err.message);
    }
  }
  return userDocumentReference;
};
