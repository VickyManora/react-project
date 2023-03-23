import {initializeApp} from 'firebase/app';
import {getAuth,
    signInWithRedirect,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged} from 'firebase/auth';

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
  export const signInWithGoogleRedirect = ()=> signInWithRedirect(auth,provider)
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInformation)=>{
             const userDocRef = doc(db, 'users', userAuth.uid);
             const userSnapShot = await getDoc(userDocRef);
             if(!userSnapShot.exists()){
                 const {displayName, email} = userAuth
                 const createAt = new Date();
                 try{
                     await setDoc(userDocRef, {
                        displayName, 
                        email,
                        createAt,
                        ...additionalInformation,
                     })
                 } catch(error){
                     console.log('error creating the user',error.message)
                 }
             }
             return userDocRef;
}

export const createUsersWithEmailAndPassword=async(email,password)=>{
      if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password)
}

export const signInAuthUsersWithEmailAndPassword=async(email,password)=>{
    if(!email || !password) return;
  return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser =async()=>await signOut(auth);

export const onAuthStateChangedListener =(callback)=>onAuthStateChanged(auth,callback)