import React, { useState } from 'react'
import './Login.css';
import { useEffect} from 'react';
//config of firebase app
import firebaseConfig from '../firebase.config';
import {initializeApp} from 'firebase/app'
import {getAuth,onAuthStateChanged,createUserWithEmailAndPassword, signOut} from 'firebase/auth'

//for google authentication
import { GoogleAuthProvider } from 'firebase/auth';
const googleProvider = new  GoogleAuthProvider();


//firebase initialization
const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);


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
            console.log('user not founds');
        }

    })






export default function Login() {
    // const signUpButton = document.querySelector('#signUp');
    // const signInButton = document.getElementById('signIn');
    let container = null

    // signUpButton.addEventListener('click', () => {
    //     container.classList.add("right-panel-active");
    // });

    // signInButton.addEventListener('click', () => {
    //     container.classList.remove("right-panel-active");
    // });

    //STATE INIT
    const [loginCred, setloginCred] = useState({email:"",password:""});
     const [signupCred, setsignupCred] = useState({email:"", password:""})

    useEffect(() => {
        container = document.querySelector('#container');
    }, [])







    const handleClick = (e) => {
        console.log("Hi");
        //console.log(container.innerHTML)
        container.classList.toggle('right-panel-active');
    }

    const handleSignupOnChange  = (e) =>{
        //console.log('form changed')
        setsignupCred({...signupCred,[e.target.name]:e.target.value})
        //console.log(signupCred);
    }

    const handleSignupOnSubmit = (e)=>{
        e.preventDefault();
        console.log('form submitted')

        //signup using email and password
        createUserWithEmailAndPassword(auth, signupCred.email, signupCred.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
        });

        //store user data in firestore


    }

    const handleLogout = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error occured.
          });
    }



    return (
        <div>
            <div className="login-container my-5" id="container">

                {/* signup container */}
                <div className="form-container sign-up-container">
                    <form action="#" onChange={handleSignupOnChange} onSubmit={handleSignupOnSubmit} >
                        <h1 className='my-2'>Create Account</h1>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6'><input className='input-box col-12' type="text" name='firstname' placeholder="First Name"  /></div>
                                <div className='col-6'><input className='input-box col-12' type="text" name='lastname' placeholder="Last Name"  /></div>
                                <div className='col-6'><input className='input-box col-12' type="number" name='age' placeholder="age"  /></div>
                                <div className='col-6'><input className='input-box col-12' type="number" name='phno' placeholder="Phone No"  /></div>
                                <div><input className='input-box col-12' type="email" placeholder="Email" name='email'  /></div>
                                <div><input className='input-box col-12' type="password" placeholder="Password" name='password'  /></div>
                                <div><input className='input-box col-12' type="text" placeholder="Public Key" name='publicKey'  /></div>

                                <div className='my-2 d-flex flex-row'>
                                    <label className="ms-1 form-check-label" htmlFor="radiobutton">Are you a Doctor ?</label>
                                    <div className="ms-4 form-check form-switch">
                                        <input className="radio-check form-check-input" type="checkbox" role="switch" id="radiobutton" required/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button>Sign Up</button>
                        <span className='my-1'>or create account using</span>
                        <div className="social-menu">
                            <ul className='sign-up-ul'>
                                <li><a href="/"><i className="fa fa-google"></i></a></li>
                                <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </form>
                </div>

                {/* sign in Container */}
                <div className="form-container  sign-in-container">
                    <form action="#" >
                        <h1>Sign in</h1>
                        <input className='input-box sign-in-input' type="email" placeholder="Email" />
                        <input className='input-box sign-in-input' type="password" placeholder="Password" />
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
