import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate

export function Captcha({ onCaptchaVerified }) {
  const [captcha, setCaptcha] = useState("");
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();  // Initialize useNavigate

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setCaptcha(result);
  };

  const verifyCaptcha = () => {
    if (captcha === inputValue) {
      alert("CAPTCHA verified successfully!");
      onCaptchaVerified(true);
      navigate("/explore");  // Navigate to the explore page after successful CAPTCHA verification
    } else {
      alert("Incorrect CAPTCHA, please try again.");
      generateCaptcha();
      setInputValue(""); // Clear the input field after incorrect CAPTCHA
    }
  };

  return (
    <div className="captcha-container" style={{ marginTop: "15px", width: "400px" }}>
      <h5>Solve the following CAPTCHA to continue:</h5>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p
          style={{
            fontWeight: "bold",
            letterSpacing: "3px",
            paddingLeft: "20px",
            backgroundColor: "#e0e0e0",
            padding: "10px",
            borderRadius: "5px",
            marginRight: "10px",
          }}
        >
          {captcha}
        </p>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter CAPTCHA"
          style={{
            marginRight: "10px",
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={verifyCaptcha}
          style={{
            backgroundColor: "rgb(1, 100, 143)",  // Use the primary color of your website
            color: "white",
            border: "none",
            fontSize: "16px",
            padding: "8px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Verify
        </button>
      </div>
    </div>
  );
}
