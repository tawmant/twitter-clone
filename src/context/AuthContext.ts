import { createContext } from "react";

export type Auth = {
  token: string | null;
  refresh: string | null;
  login: (jwtToken: { [key: string]: string }) => void;
  logout: () => void;
  ready: boolean;
};
function noop() {}

export const AuthContext = createContext<Auth>({
  token: null,
  refresh: null,
  login: noop,
  logout: noop,
  ready: false,
});
