import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/Navbar/Navbar";
import Articles from "./components/Articles/Articles";
import RegisterPage from "./pages/Auth/RegitsterPage/RegisterPage";
import GratitudePage from "./pages/Auth/GratitudePage";

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Redirect to="/" />
        </Switch>
        <Articles />
      </>
    );
  }

  return (
    <Switch>
      <Route path="/account/login" component={AuthPage} />
      <Route path="/account/registration" component={RegisterPage} />
      <Route path="/account/activate/:uid/:token" component={GratitudePage} />
      <Redirect to="/account/login" />
    </Switch>
  );
};
