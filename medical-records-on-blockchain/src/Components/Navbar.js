import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";

export default function Navbar() {

  const [isloggedIn, setisloggedIn] = useState(true);

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("Sign-out successful.");
      setisloggedIn(false)
    }).catch((error) => {
      console.log("An error happened.");
    });
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-container">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Medicon</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link mx-3 active" aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link mx-3" to="/records">Records</Link>
              </li>

              <li className={`${isloggedIn? "d-none" : "nav-item"}`}>
                <Link className="nav-link mx-3" to="/login">Login</Link>
              </li>

              <li className={`${isloggedIn? "d-none" : "nav-item"}`}>
                <Link className="auth-btn btn mx-3" to="/signup">Signup</Link>
              </li>

              <li className={`${isloggedIn? "nav-item" : "d-none"}`}>
                <Link className="nav-link mx-3" to="/profile">Profile</Link>
              </li>

              <li className={`${isloggedIn? "nav-item" : "d-none"}`}>
                <Link className="auth-btn btn mx-3" to="/" onClick={handleLogOut}>Logout</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
