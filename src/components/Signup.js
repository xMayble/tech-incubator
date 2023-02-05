import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Signup() {
    let navigate = useNavigate();

    const [logins, setLogins] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        setLogins([...logins, username.toString().toLowerCase()]);
        localStorage.setItem("logins", logins);
        navigate("/Login");
    }

    const handleUsername = (e) => {
        setUsername(e.currentTarget.value);
    }

    const handlePassword = (e) => {
        setPassword(e.currentTarget.value);
    }
  
    return (
      <div className="signup-container">

        {/* username and password login */}
        <div className="user-pass-login">
            <div>
                Username: <input value={username} onChange={handleUsername}/>
            </div>
            <div>
                Password: <input value={password} onChange={handlePassword}/>
            </div>
            <button onClick={handleSignup}>Sign Up</button>
        </div>
      </div>
    );
  }
  
  export default Signup;