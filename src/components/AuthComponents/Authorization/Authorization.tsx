import React, { ChangeEvent, MouseEvent, useContext, useState } from "react";
import axios from "axios";
import { useRoutes } from "../../../routes";
import { useHttp } from "../../../hooks/http.hook";
import { AuthContext } from "../../../context/AuthContext";

const Authorization = () => {
  const [authData, setAuthData] = useState<{ [key: string]: string }>({
    login: "",
    password: "",
  });
  const auth = useContext(AuthContext);
  const { request } = useHttp();

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const signInHandler = async () => {
    try {
      const data = await request(
        "https://twitter-api-v2.herokuapp.com/auth/jwt/create/",
        "POST",
        { ...authData }
      );

      auth.login({ token: data.access, refresh: data.refresh });
    } catch (e) {}
  };

  return (
    <div>
      <input
        onChange={inputHandler}
        value={authData.login}
        name="login"
        type="text"
        placeholder="username"
        required
      />
      <input
        onChange={inputHandler}
        value={authData.password}
        name="password"
        type="password"
        placeholder="password"
        required
      />
      <button onClick={signInHandler} className="btn btn-outline-primary">
        войти
      </button>
    </div>
  );
};

export default Authorization;
