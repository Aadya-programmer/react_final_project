import React, { useState } from 'react';
import { Header } from "../Reusable/Header";
import { Footer } from "../Reusable/Footer";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { app } from "../Firebase/Firebase";
import { Captcha } from "./Captcha";
import { useNavigate, Link } from 'react-router-dom';
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"; // Firestore functions

const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");
  const navigate = useNavigate();

  const onCaptchaVerified = (isValid) => {
    if (isValid) {
      setCaptchaVerified(true);
      loginUser(); // Login only after CAPTCHA is verified
    }
  };

  const loginUser = async () => {
    try {
      const userDoc = await getDoc(doc(db, "users", username));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        if (userData.password === password) { // In a real application, use hashed passwords!
          alert("Login successful!");
          navigate("/explore");
        } else {
          alert("Incorrect password, please try again.");
        }
      } else {
        alert("Username not found.");
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert("Failed to log in: " + error.message);
    }
  };

  const handleLoginClick = () => {
    if (username === "" || password === "") {
      setValidationMessage("Please fill in all the details.");
    } else {
      setValidationMessage("");
      setShowCaptcha(true);
      setCaptchaVerified(false);
    }
  };

  return (
    <>
      <Header />
      <div className="login-page-container">
        <div className="login-card">
          <div className="login-image">
            <img src="/images/bookcat.jpeg" alt="Welcome to Reader Den" />
          </div>
          <div className="login-form-section">
            <h3 className="welcome-message">Hi There!</h3>
            <h1 className="login-heading">
              Welcome to <span className="brand-name">Reader Den</span>
            </h1>
            <h5 className="login-subheading">Enter Your Details To Login</h5>
            <h5 className="signup-link">
              Don't Have an Account? <Link to="/signup"><span className="sign-in-link">SIGN UP</span></Link>
            </h5>
            <div className="form-inputs">
              <label>Username:</label>
              <input
                type="text"
                className="login-input"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder="Enter your username"
              />
              <label>Password:</label>
              <input
                type="password"
                className="login-input"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Enter your password"
              />
              {validationMessage && (
                <p className="validation-message">{validationMessage}</p>
              )}
              <button className="login-button" onClick={handleLoginClick}>
                Login
              </button>
              {showCaptcha && (
                <Captcha onCaptchaVerified={onCaptchaVerified} />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
