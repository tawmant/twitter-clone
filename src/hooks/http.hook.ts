import { useState, useCallback, useContext, useRef } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const auth = useContext(AuthContext);

  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";
        }

        const response = await fetch(url, { method, headers, body });
        const data = await response.json();

        if (response.status === 401) {
          throw new Error(data.message || "token устарел");
        } else if (response.status === 201) {
          data.message = "create";
        } else if (!response.ok) {
          throw new Error(data.message || "Что-то пошло не так");
        }

        setLoading(false);

        return data;
      } catch (e: any) {
        // if (e.message === "token устарел") {
        // fetch("https://twitter-api-v2.herokuapp.com/auth/jwt/refresh/", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ refresh: auth.refresh }),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {});
        // } else {
        setLoading(false);
        setError(e);
        throw e;
        // }
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};
