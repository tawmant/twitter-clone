import React, { FC, useState, MouseEvent } from "react";
import "./_authModal.scss";
import cx from "classnames";
import { useMultipleForm } from "usetheform";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box/Box";

type TAuthModal = {
  visible: boolean;
  onToggleHandler: () => void;
  children?: JSX.Element;
};

const AuthModal: FC<TAuthModal> = ({ children, visible, onToggleHandler }) => {
  const [currentPage, setPage] = useState<number>(1);
  const nextPage = () => setPage((prev) => ++prev);
  const prevPage = () => setPage((prev) => --prev);
  const [getWizardState, wizard] = useMultipleForm();
  const onSubmitWizard = () => console.log(getWizardState());

  return (
    <form
      onClick={onToggleHandler}
      className={`auth-modal position-fixed bg-opacity-50 bg-dark ${cx({
        active: visible,
      })}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`auth-modal__content bg-light mx-auto mt-3`}
      >
        <div className="auth-modal__top">
          {children}
          <div className="auth-modal__close" onClick={onToggleHandler}>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
            >
              <g>
                <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path>
              </g>
            </svg>
          </div>
          <div className="auth-modal__logo">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="red">
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>
          </div>
          <div className="px-4"></div>
        </div>

        <div className="auth-modal__bottom">
          <div className="auth-modal__form">
            <h2 className="auth-modal__title">
              To get started, first enter your phone, email, or @username
            </h2>
            <input type="text" placeholder='Phone, email, or @username'/>
          </div>
          <button className="auth-modal__btn">
            next
          </button>
        </div>
      </div>
    </form>
  );
};

export default AuthModal;
