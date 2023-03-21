
import { auth,signInWithGooglePopup,createUserDocumentFromAuth,signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
import { useEffect} from 'react';
import {getRedirectResult} from 'firebase/auth'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
const SignIn=()=>{

//    useEffect( ()=>{
//     async function fetchMyAPI() {
//         const response = await getRedirectResult(auth);
//           if(response){
//               const userDocRef = await createUserDocumentFromAuth(response.user)
//           }
//       }
//       fetchMyAPI()
//    },[])


    const logGoogleUser =async()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }


    return(
        
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>Sign in With Google Popup</button>
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}>Sign in With Google Redirect</button> */}
        </div>
    )
}

export default SignIn;