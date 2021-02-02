import React from "react";
import HomePage from "../pages/HomePage/index";
import AboutPage from "../pages/AboutPage/index";
import ErrorPage from "../pages/ErrorPage/index";
import AdmPage from "../pages/AdmPage/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";


export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path={"/sobre"}>
          <AboutPage />
        </Route>
        <Route exact path={"/adm"}>
          <AdmPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
