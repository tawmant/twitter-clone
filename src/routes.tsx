import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/Navbar/Navbar";
import Articles from "./components/Articles/Articles";
import GratitudePage from "./components/AuthComponents/GratitudePage";
import AuthPage from "./pages/AuthPage/AuthPage";

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <div className="container">
        <div className="app__row">
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Redirect to="/" />
          </Switch>
          <Articles />
        </div>
      </div>
    );
  }

  return (
    <Switch>
      <Route path="/account/auth" component={AuthPage} />
      {/*<Route path="/account/login" component={Authorization} />*/}
      {/*<Route path="/account/registration" component={Register} />*/}
      <Route path="/account/activate/:uid/:token" component={GratitudePage} />
      <Redirect to="/account/auth" />
    </Switch>
  );
};
