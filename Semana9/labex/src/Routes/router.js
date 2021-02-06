import React from "react";
import HomePage from "../pages/HomePage/index";
import LoginPage from "../pages/LoginPage/index";
import ErrorPage from "../pages/ErrorPage/index";
import AdmPage from "../pages/AdmPage/index";
import SubscribePage from "../pages/SubscribePage/index";
import CreateTripPage from "../pages/CreateTripPage/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";


export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>
        <Route exact path={"/adm"}>
          <AdmPage />
        </Route>
        <Route exact path={"/subscribe"}>
          <SubscribePage />
        </Route>
        <Route exact path={"/createtrip"}>
          <CreateTripPage/>
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
