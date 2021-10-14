import React, { useState } from "react";
import AuthModal from "../../components/AuthComponents/AuthModal/AuthModal";

import "./_auth.scss";

const AuthPage = () => {
  const [authToggle, setAuthToggle] = useState<boolean>(false);

  const authToggleHandler = () => setAuthToggle((prev) => !prev);

  return (
    <div className="auth">
      <div className="container-fluid">
        <div className="row">
          <AuthModal
            onToggleHandler={authToggleHandler}
            visible={authToggle}
          ></AuthModal>
          <div className="auth__left col-7">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="#fff">
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>
          </div>
          <div className="auth__right col-5">
            <div className="auth__content px-4 py-5">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="#0a62c4">
                <g>
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                </g>
              </svg>
              <h1 className="auth__title">Happening now</h1>
              <p className="auth__description">Join Twitter today.</p>
              <button className="auth__sign-up">
                Sign up with phone or email
              </button>
              <p className="auth__private-agreement">
                By signing up, you agree to the{" "}
                <a href="https://twitter.com/en/tos">Terms of Service</a>
                <span> and </span>
                <a href="https://twitter.com/en/privacy">Privacy Policy</a>,
                including{" "}
                <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">
                  Cookie Use.
                </a>
              </p>
              <p className="auth__sign-in">
                Already have an account?{" "}
                <span onClick={authToggleHandler} className="sign-in">
                  Sign in
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
