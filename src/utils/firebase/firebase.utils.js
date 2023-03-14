import {initializeApp} from 'firebase/app';
import {getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider} from 'firebase/auth';

import {getFirestore, doc, getDoc, setDoc
         } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBqR32OCJUrf9b99fxs5QviEKiMEe88fKE",
    authDomain: "crwn-clothing-db-99f8d.firebaseapp.com",
    projectId: "crwn-clothing-db-99f8d",
    storageBucket: "crwn-clothing-db-99f8d.appspot.com",
    messagingSenderId: "853545135208",
    appId: "1:853545135208:web:73abfc281503fb75dadfdd"
  };
  
  // Initialize Firebase
  const fireBaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt:"select_account"
  })

  export const auth = getAuth();

  export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth)=>{
             const userDocRef = doc(db, 'users', userAuth.uid);
             const userSnapShot = await getDoc(userDocRef);
             if(!userSnapShot.exists()){
                 const {displayName, email} = userAuth
                 const createAt = new Date();
                 try{
                     await setDoc(userDocRef, {
                        displayName, 
                        email,
                        createAt
                     })
                 } catch(error){
                     console.log('error creating the user',error.message)
                 }
             }
             return userDocRef;
}