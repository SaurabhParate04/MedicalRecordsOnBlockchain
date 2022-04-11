import React, { useState } from 'react'
import './Login.css';
//hooks
import { useEffect} from 'react';
import { useHistory } from 'react-router-dom';
//config of firebase app
import firebaseConfig from '../firebase.config';
import {initializeApp} from 'firebase/app'
import {getAuth,onAuthStateChanged,createUserWithEmailAndPassword, signOut} from 'firebase/auth';
import { getFirestore, doc, setDoc } from "firebase/firestore";

//for google authentication
import { GoogleAuthProvider, FacebookAuthProvider,signInWithPopup,sendEmailVerification } from 'firebase/auth';
const googleProvider = new  GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();


//firebase initialization
const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


    // AUTH SETUP
    // callled on login or logout
    onAuthStateChanged(auth,(user)=>{
        //if user exists
        if(user)
        {
            //user exists -- signed in 
            //console.log('user signed IN');
            console.log(user);
        }
        else{
            //it doesnt --signed out
            console.log('user not found');
        }

    })






export default function Login() {

    let container = null
    //STATE INIT
    const [loginCred, setloginCred] = useState({email:"",password:""});
     const [signupCred, setsignupCred] = useState({email:"", password:"", firstName:"", lastName:"", phNo:"",age:"", isDoc:false, publicKey:-1});

    useEffect(() => {
        container = document.querySelector('#container');
    }, [])

    const history = useHistory();

    const handleClick = (e) => {
        //console.log("Hi");
        //console.log(container.innerHTML)
        container.classList.toggle('right-panel-active');
    }

    const handleSignupOnChange  = (e) =>{
        //console.log('form changed')
        setsignupCred({...signupCred,[e.target.name]:e.target.value})
        //console.log(signupCred);
    }


    const storeUserInfo = async() =>{
        try {
            const {firstName, lastName, age, email, isDoc, publicKey, phNo } = signupCred;
            await setDoc(doc(db, "users", `${email}`), {
                first: firstName,
              last: lastName,
              age: age,
              email:email,
              phoneNumber:phNo,
              isDoc,
              publicKey,
              });
            history.push('/')
            
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }


    //handle submit button on submit action
    const handleSignupOnSubmit = (e)=>{
        e.preventDefault();
        console.log('signup clicked');


        //signup using email and password
        createUserWithEmailAndPassword(auth, signupCred.email, signupCred.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            //store user data in firestore
            try {
                storeUserInfo(user);
            } catch (err) {
                console.log(err.message);
            }

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
        });


        //sendEmailVerification(auth.currentUser)
        //.then(() => {
        //    console.log('verification email sent !!');
        //});



    }

    const handleLogout = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error occured.
          });
    }

    const handleOnClickGoogleSignUp = (e) =>{

        e.preventDefault();

        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

        //store user data in firestore
    }

    const handleOnClickFacebookSignUp = (e)=>{
        e.preventDefault();


        signInWithPopup(auth, facebookProvider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;

            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);

            // ...
        });

    }



    return (
        <div>
            <div className="login-container my-5" id="container">

                {/* signup container */}
                <div className="form-container sign-up-container">
                    {/* <button onClick={handleLogout} >logout</button> */}
                    <form action="#" onChange={handleSignupOnChange} onSubmit={handleSignupOnSubmit} >
                        <h1 className='my-2'>Create Account</h1>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6'><input className='input-box col-12' type="text" name='firstName' placeholder="First Name" required /></div>
                                <div className='col-6'><input className='input-box col-12' type="text" name='lastName' placeholder="Last Name" required /></div>
                                <div className='col-6'><input className='input-box col-12' type="number" name='age' placeholder="age" required /></div>
                                <div className='col-6'><input className='input-box col-12' type="number" name='phNo' placeholder="Phone No" required /></div>
                                <div><input className='input-box col-12' type="email" placeholder="Email" name='email' required /></div>
                                <div><input className='input-box col-12' type="password" placeholder="Password" name='password' required /></div>
                                <div><input className='input-box col-12' type="text" placeholder="Public Key" name='publicKey' required /></div>

                                <div className='my-2 d-flex flex-row'>
                                    <label className="ms-1 form-check-label" htmlFor="radiobutton">Are you a Doctor ?</label>
                                    <div className="ms-4 form-check form-switch">
                                        <input className="radio-check form-check-input" type="checkbox" role="switch" id="radiobutton" required/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* signup button */}
                        <button>Sign Up</button>
                        <span className='my-1'>or create account using</span>
                        <div className="social-menu">
                            <ul className='sign-up-ul'>
                                <li><a href="/" onClick={handleOnClickGoogleSignUp}><i className="fa fa-google"></i></a></li>
                                <li><a href="/" onClick={handleOnClickFacebookSignUp} ><i className="fa fa-facebook"></i></a></li>
                                <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </form>
                </div>

                {/* sign in Container */}
                <div className="form-container  sign-in-container">
                    <form action="#" >
                        <h1>Sign in</h1>
                        <input className='input-box sign-in-input' type="email" placeholder="Email" required />
                        <input className='input-box sign-in-input' type="password" placeholder="Password" required />
                        <a href="/">Forgot your password?</a>
                        <button >Sign In</button>
                        <span className='mt-1'>or use your account</span>
                        <div className='social-menu mt-2'>
                            <ul>
                                <li><a href="/"><i className="fa fa-google"></i></a></li>
                                <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </form>
                </div>

                {/* Ovelay container */}
                <div className="overlay-container ">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={handleClick}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={handleClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
