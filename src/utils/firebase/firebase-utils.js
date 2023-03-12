import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAhNPdEPyEcv7WzM0a8rKb936rzwAKIYdw",
    authDomain: "clohting-crwnapp.firebaseapp.com",
    projectId: "clohting-crwnapp",
    storageBucket: "clohting-crwnapp.appspot.com",
    messagingSenderId: "45669097640",
    appId: "1:45669097640:web:48182cdd65106a0ac1629d"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
       prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
    const  userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {displayName, email, createdAt});

        }catch (err) {
            console.log(err.message, 'error creating a user');
        }
    }

    return userDocRef;
};
