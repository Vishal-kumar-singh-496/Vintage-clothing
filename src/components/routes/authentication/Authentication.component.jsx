
import SignUpForm from '../../sign-up-form/sign-up-form.component';
import SignInForm from '../../sign-in-form/sign-in-form.component';
import './authentication.styles.scss';


// import {useEffect} from 'react';
// import {getRedirectResult} from 'firebase/auth'; 

const Authentication=()=>{
    // useEffect( ()=> {
    //     async function fetchData(){
    //     const response =await getRedirectResult(auth);
    //     if(response)
    // {
    //     const userDocRef=await createUserDocumentFromAuth(response.user);
    // }}
    //     fetchData();

    // },[]);
    
    

    return(
        <div className='authentication-container'>
            
            <SignInForm/>
            <SignUpForm/>
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign with Google Redirect
            </button> */}
        </div>
    )
}

export default Authentication;