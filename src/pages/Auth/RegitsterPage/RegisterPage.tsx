import React, { ChangeEvent, useState } from "react";
import { useHttp } from "../../../hooks/http.hook";

import "./_registerPage.scss";

const RegisterPage = () => {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    date_of_birth: "",
    login: "",
    password: "",
  });
  const { request } = useHttp();

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRegister((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const registerHandler = async () => {
    try {
      const res = await request(
        "https://twitter-api-v2.herokuapp.com/auth/users/",
        "POST",
        register
      )
        .then((res) => console.log(res))
        .then((data) => console.log(data));
      // if (res.message === "create") {
      // }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>

      {/*<input*/}
      {/*  onChange={changeInputHandler}*/}
      {/*  value={register.name}*/}
      {/*  type="text"*/}
      {/*  placeholder="name"*/}
      {/*  name="name"*/}
      {/*  required*/}
      {/*/>*/}
      {/*<input*/}
      {/*  onChange={changeInputHandler}*/}
      {/*  value={register.email}*/}
      {/*  type="text"*/}
      {/*  placeholder="email"*/}
      {/*  name="email"*/}
      {/*  required*/}
      {/*/>*/}
      {/*<input*/}
      {/*  onChange={changeInputHandler}*/}
      {/*  value={register.date_of_birth}*/}
      {/*  type="date"*/}
      {/*  name="date_of_birth"*/}
      {/*  required*/}
      {/*/>*/}
      {/*<input*/}
      {/*  onChange={changeInputHandler}*/}
      {/*  value={register.login}*/}
      {/*  type="text"*/}
      {/*  placeholder="login"*/}
      {/*  name="login"*/}
      {/*  required*/}
      {/*/>*/}
      {/*<input*/}
      {/*  onChange={changeInputHandler}*/}
      {/*  value={register.password}*/}
      {/*  type="text"*/}
      {/*  placeholder="password"*/}
      {/*  name="password"*/}
      {/*  required*/}
      {/*/>*/}

      {/*<button onClick={registerHandler} className="btn btn-primary">*/}
      {/*  Register*/}
      {/*</button>*/}

      {/*<div className="modal d-flex justify-content-center bg-opacity-50 bg-dark active">*/}
      {/*  <div className="bg-light position-fixed mx-3 mt-3">*/}
      {/*    <div className="p-5 text-center">*/}
      {/*      <h1>Аккаунт успешно создан!</h1>*/}
      {/*      <p>*/}
      {/*        Для потверждения перейдите по ссылке, которая была отправлена по*/}
      {/*        почте*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default RegisterPage;
