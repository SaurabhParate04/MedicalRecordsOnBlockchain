import React from 'react'
import './Login.css';
import { useEffect } from 'react';

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

    useEffect(() => {
        container = document.querySelector('#container');
    }, [])


    const handleClick = (e) => {
        console.log("Hi");
        console.log(container.innerHTML)
        container.classList.toggle('right-panel-active');
    }

    return (
        <div>
            <div className="login-container" id="container">

                {/* signup container */}
                <div className="form-container sign-up-container">
                    <form action="#" >
                        <h1 className='my-2'>Create Account</h1>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6'><input className='input-box col-12' type="text" placeholder="First Name" required /></div>
                                <div className='col-6'><input className='input-box col-12' type="text" placeholder="Last Name" required /></div>
                                <div className='col-6'><input className='input-box col-12' type="number" placeholder="age" required /></div>
                                <div className='col-6'><input className='input-box col-12' type="number" placeholder="Phone No" required /></div>
                                <div><input className='input-box col-12' type="email" placeholder="Email" required /></div>
                                <div><input className='input-box col-12' type="password" placeholder="Password" required /></div>
                                <div><input className='input-box col-12' type="text" placeholder="Public Key" required /></div>

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
