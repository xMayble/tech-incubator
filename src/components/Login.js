import React from 'react';
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
    let navigate = useNavigate();
  
    const signInWithGoogle = () => {
      signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
      });
    };

    const handleLogin = () => {
        // setIsAuth(true);
        // navigate("/");
    }
  
    return (
      <div className="loginPage">

        {/* username and password login */}
        <div className="user-pass-login">
            <div>
                Username: <input />
            </div>
            <div>
                Password: <input />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>

        <p>Sign In With Google to Continue</p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
    );
  }
  
  export default Login;