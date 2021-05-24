import React from "react";
import { Route, Switch } from "react-router-dom";
import Error404 from "../pages/Error404";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Scoring from "../pages/Scoring/Scoring";
import Banks from "../pages/Banks/Banks";

export const UserRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/user" component={Home} />
        <Route exact path="/perfil" component={Profile} />
        <Route exact path="/calcular-scoring" component={Scoring} />
        <Route exact path="/banks" component={Banks} />
        <Route component={Error404} />
      </Switch>
    </>
  );
};
