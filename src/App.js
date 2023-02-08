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
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (

      <Router>
        <nav>
            {!isAuth ? (
               <>
               <Link to="/login"> Login! </Link>
               <Link to="/signup"> Sign Up! </Link>
             </>
            ) : (
              <>
                  <Link to="/"> Home </Link>
                  <Link to="/task"> Tasks </Link>
                  <button onClick={signUserOut}> Log Out</button>
              </>
            )}
      </nav>
        <Routes>
              <Route path="/" element={ <div>Welcome to Tech Incubator!</div> } />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
              <Route path="/task" element={<Task />} />
        </Routes>
      </Router>

  );
}

export default App;
