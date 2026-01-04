import React, { useState } from 'react';
import './Login.css';

const LoginPage = () => {
  // Use state to handle the 'toggled' class
  const [isToggled, setIsToggled] = useState(false);

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setIsToggled(true); // Adds the 'toggled' class logic
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setIsToggled(false); // Removes the 'toggled' class logic
  };

  return (
    <div className="login-page-container">
      {/* Conditionally add the 'toggled' class based on state */}
      <div className={`auth-wrapper ${isToggled ? 'toggled' : ''}`}>
        <div className="background-shape"></div>
        <div className="secondary-shape"></div>

        {/* --- Login Panel --- */}
        <div className="credentials-panel signin">
          <h2 className="slide-element">Login</h2>
          <form>
            <div className="field-wrapper slide-element">
              <input type="text" required />
              <label>Username</label>
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="field-wrapper slide-element">
              <input type="password" required />
              <label>Password</label>
              <i className="fa-solid fa-lock"></i>
            </div>
            <div className="field-wrapper slide-element">
              <button className="submit-button" type="submit">Login</button>
            </div>
            <div className="switch-link slide-element">
              <p>Don't have an account? <br /> 
                <a href="#" className="register-trigger" onClick={handleRegisterClick}>Sign Up</a>
              </p>
            </div>
          </form>
        </div>

        <div className="welcome-section signin">
          <h2 className="slide-element">WELCOME BACK!</h2>
        </div>

        {/* --- Register Panel --- */}
        <div className="credentials-panel signup">
          <h2 className="slide-element">Register</h2>
          <form>
            <div className="field-wrapper slide-element">
              <input type="text" required />
              <label>Username</label>
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="field-wrapper slide-element">
              <input type="email" required />
              <label>Email</label>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="field-wrapper slide-element">
              <input type="password" required />
              <label>Password</label>
              <i className="fa-solid fa-lock"></i>
            </div>
            <div className="field-wrapper slide-element">
              <button className="submit-button" type="submit">Register</button>
            </div>
            <div className="switch-link slide-element">
              <p>Already have an account? <br /> 
                <a href="#" className="login-trigger" onClick={handleLoginClick}>Sign In</a>
              </p>
            </div>
          </form>
        </div>

        <div className="welcome-section signup">
          <h2 className="slide-element">WELCOME!</h2>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;