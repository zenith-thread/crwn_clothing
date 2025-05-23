import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
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

// FIREBASE AUTHENTICATION FUNCTIONALITY

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// FIREBASE DATABASE FUNCTIONALITY

export const db = getFirestore();

/*********************************************************************/
/**
 * If the user document does not exist in Firestore, create it.
 *
 * @param {Object} userAuth - The user's authentication information.
 * @returns {Object} The user document reference from Firestore.
 */
/*********************************************************************/
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;

  const userDocumentReference = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocumentReference);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocumentReference, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
      alert("Successfully created the user!");
    } catch (err) {
      console.log("Error creating the user,", err.message);
    }
  }
  return userDocumentReference;
};
