import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

type TUseParams = {
  uid: string;
  token: string;
};

const GratitudePage = () => {
  const { uid, token } = useParams<TUseParams>();

  useEffect(() => {
    fetch("https://twitter-api-v2.herokuapp.com/auth/users/activation/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid, token }),
    });
  }, []);

  return (
    <>
      <h1>страница активирована</h1>
    </>
  );
};

export default GratitudePage;
