import { useState } from "react"
import FormInput from '../form-input/form-input.component'
import {createUsersWithEmailAndPassword,createUserDocumentFromAuth,signInWithGooglePopup,signInAuthUsersWithEmailAndPassword} from '../../utils/firebase/firebase.utils'
import './sign-in-form.styles.scss'
import Button from '../button/button.component'
const defaultFormFields ={
    email:'',
    password:'',
}



const SignInForm =()=>{
    
    

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email,password}=formFields


    const signInWithGoogle =async()=>{
         await signInWithGooglePopup();
         
    }
     const handleSubmit = async (event)=>{
        event.preventDefault();
        try{
            const {user} =await signInAuthUsersWithEmailAndPassword(email,password)
             resetFormFields();

        }catch(error){
            if(error.code==="auth/wrong-password"){
                alert("Incorrect Password for Email")
            }else if(error.code==="auth/user-not-found"){
                alert("User Not Found")
            }
           console.log(error);
        }
     
     }

    const resetFormFields=()=>{
        setFormFields(defaultFormFields)
    }

    const handleChange =(event)=>{
       const {name,value}=event.target
       setFormFields({...formFields,[name]:value})
    }
    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your Email and Password </span>
            <form onSubmit={handleSubmit}>
                  <FormInput label="Email"  type="email" required onChange={handleChange} name="email" value={email}/>
                  <FormInput label="Password" type="password"  required onChange={handleChange} name="password" value={password}/>
                  <div className='buttons-container'>
                  <Button type="submit">Sign In</Button>
                  <Button buttonType='google' type="button" onClick={signInWithGoogle}>Google sign In</Button>
                  </div>
            </form>
        </div>
    )
}
export default SignInForm