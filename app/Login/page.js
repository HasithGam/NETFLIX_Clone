"use client"
import React, { useState } from 'react';
import './login.css';
import { login, signUp } from '../firebase';
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // const user_auth = async (event) => {
  //   event.preventDefault();
  //   setLoading(true);
  //   if (signState === "Sign In") {
  //     await login(email, password);
  //   }
  //   else {
  //     await signUp(name, email, password);
  //   }
  //   setLoading(false);
  //   router.push("/");
  // }

  const user_auth = async (event) => {
    event.preventDefault();

    let hasError = false;
    setNameError("");
    setEmailError("");
    setPasswordError("");

    if (signState === "Sign Up" && name.trim() === "") {
      setNameError("Please enter your name here");
      hasError = true;
    }

    if (email.trim() === "") {
      setEmailError("Please enter a valid email address.");
      hasError = true;
    }

    if (password.trim() === "") {
      setPasswordError("Your password must contain between 4 and 60 characters.");
      hasError = true;
    }

    if (hasError) return;

    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signUp(name, email, password);
    }
    setLoading(false);
    router.push("/");
  };

  return (

    <div className='login'>
      <img src="/assets/logo.png" alt="NETFLIX Logo" className='login-logo' />
      <div className='container'>
        <div className='login-form'>
          <h1>{signState}</h1>
          <form>
            {signState === "Sign Up" && (
              <>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Your Name"
                  className={nameError ? "input-error" : ""}
                />
                {nameError && <p className="error-message">{nameError}</p>}
              </>
            )}

            <input
              value={email}
              className={`text-style ${emailError ? "input-error" : ""}`}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            {emailError && <p className="error-message">{emailError}</p>}

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className={passwordError ? "input-error" : ""}
            />
            {passwordError && <p className="error-message">{passwordError}</p>}

            <button onClick={user_auth} type="submit">{signState}</button>
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember" className="checkmark">Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className="form-switch">
            {signState === "Sign In" ? <p>New to Netflix?<span onClick={() => { setSignState("Sign Up") }}>Sign Up Now</span></p> :
              <p>Already have account?<span onClick={() => { setSignState("Sign In") }}>Sign In Now</span></p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
