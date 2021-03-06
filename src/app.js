import React
// , { useState } 
from "react";
import PublicLayout from "./components/Layout";
import { GlobalStyle } from "./styles/global";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import ScrollToTop from "./components/ScrolToTop";

import Dashboard from "./screens/Dashboard";
import Posts from "./screens/Posts";
import Documentation from "./screens/Documentation";
import Login from "./screens/Login";

import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Ubuntu:400,500,700", "sans-serif"],
  },
});

export default function App() {

  return (
    <>
      <Router>
        <ScrollToTop>
            <Switch>
              <PublicRoute exact path="/">
                <Redirect to="/dashboard" />;
              </PublicRoute>
              <PublicRoute path="/dashboard" exact>
                <Dashboard />
              </PublicRoute>
              <PublicRoute path="/posts" exact>
                <Posts />
              </PublicRoute>
              <PublicRoute path="/documentation" exact>
                <Documentation />
              </PublicRoute>
              <Route path="/login" exact>
                <Login />
              </Route>
            </Switch>
        </ScrollToTop>
      </Router>
      <GlobalStyle />
    </>
  );
}

const PublicRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest} render={() => <PublicLayout>{children}</PublicLayout>} />
  );
};
