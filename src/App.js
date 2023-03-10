import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Task from "./components/Task";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  
  const signUserOut = () => {
    signOut().then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (

      <Router>
            <div class='homepage_title'>
            Welcome to Tech Incubator!
            {!isAuth ? (
               <>
               <div className="buttons-container">
               <Link class="signup-button" to="/signup"> Sign Up </Link>
               <Link class="login-button" to="/login"> Login </Link>
               </div>
             </>
            ) : (
              <>
                  <Link to="/"> Home </Link>
                  <Link to="/task"> Tasks </Link>
                  <button onClick={signUserOut}> Log Out</button>
              </>
            )}
            </div>
      
        <Routes>
              <Route path="/" element={<div />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
              <Route path="/task" element={<Task />} />
        </Routes>
      </Router>

  );
}

export default App;
