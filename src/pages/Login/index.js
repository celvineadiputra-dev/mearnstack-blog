import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
    const [passwordType, setPasswordType] = useState("password");
    const setPasswordOnHandler = ()=>{
        if(passwordType === "password") setPasswordType("text")
        else setPasswordType("password")
    }
    return (
        <div className="form-container">
            <div className="form-form">
                <div className="form-form-wrap">
                    <div className="form-container">
                        <div className="form-content">
                            <h1 className="">
                                Log In to{" "}
                                <a href="index.html">
                                    <span className="brand-name">MEARN STACK BLOG</span>
                                </a>
                            </h1>
                            <p className="signup-link">
                                New Here?{" "}
                                <Link to="/register">
                                    Create an account
                                </Link>
                            </p>
                            <form className="text-left">
                                <div className="form">
                                    <div
                                        id="username-field"
                                        className="field-wrapper input">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        <input
                                            id="username"
                                            name="username"
                                            type="text"
                                            className="form-control"
                                            placeholder="Username"
                                        />
                                    </div>

                                    <div
                                        id="password-field"
                                        className="field-wrapper input mb-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-lock">
                                            <rect
                                                x="3"
                                                y="11"
                                                width="18"
                                                height="11"
                                                rx="2"
                                                ry="2"></rect>
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                        </svg>
                                        <input
                                            id="password"
                                            name="password"
                                            type={passwordType}
                                            className="form-control"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="d-sm-flex justify-content-between">
                                        <div className="field-wrapper toggle-pass">
                                            <p className="d-inline-block">
                                                Show Password
                                            </p>
                                            <label className="switch s-primary">
                                                <input
                                                    type="checkbox"
                                                    id="toggle-password"
                                                    className="d-none"
                                                    onClick={() => setPasswordOnHandler()}
                                                />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                        <div className="field-wrapper">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                value="">
                                                Log In
                                            </button>
                                        </div>
                                    </div>

                                    <div className="field-wrapper text-center keep-logged-in">
                                        <div className="n-chk new-checkbox checkbox-outline-primary">
                                            <label className="new-control new-checkbox checkbox-outline-primary">
                                                <input
                                                    type="checkbox"
                                                    className="new-control-input"
                                                />
                                                <span className="new-control-indicator"></span>
                                                Keep me logged in
                                            </label>
                                        </div>
                                    </div>

                                    <div className="field-wrapper">
                                        <a
                                            href="auth_pass_recovery.html"
                                            className="forgot-pass-link">
                                            Forgot Password?
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-image">
                <div className="l-image"></div>
            </div>
        </div>
    );
};

export default Login;
