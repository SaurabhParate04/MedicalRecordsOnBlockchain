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
            <div className="login-container my-5" id="container">
                <div className="form-container sign-up-container">
                    <form action="#" >
                        <h1>Create Account</h1>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        {/* <div className="social-menu">
                            <ul>
                                <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="/"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div> */}
                        <button>Sign Up</button>
                        <span>or use your email for registration</span>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#" >
                        <h1>Sign in</h1>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="/">Forgot your password?</a>
                        <button >Sign In</button>
                        <span>or use your account</span>
                        <div className='social-menu'>
                            <ul>
                                <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="/"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </form>
                </div>
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
