import { useState, useCallback, useEffect } from "react";

const storageName: string | null = "token";

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [refresh, setRefresh] = useState<string | null>(null);
  const [ready, setReady] = useState<boolean>(false);

  const login = useCallback((jwtToken): void => {
    setToken(jwtToken.token);
    setRefresh(jwtToken.refresh);
    localStorage.setItem(storageName, JSON.stringify(jwtToken));
  }, []);

  const logout = useCallback((): void => {
    setToken(null);
    setRefresh(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName)!);

    if (data) {
      login(data);
    }
    setReady(true);
  }, [login]);

  return { login, logout, token, refresh, ready };
};
