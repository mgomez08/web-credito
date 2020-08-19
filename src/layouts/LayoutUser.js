import React, { useState } from "react";
import clsx from "clsx";
import { Route, Switch, Redirect } from "react-router-dom";
import "./LayoutBasic.scss";
import MenuTopUser from "../components/User/MenuTopUser";
import Footer from "../components/Web/Footer";
import Login from "../pages/Login/Login";
import { makeStyles } from "@material-ui/core";
import DrawerUser from "../components/User/MenuTopUser/DrawerUser";
import useAuth from "../hooks/useAuth";

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    mmarginRight: -240,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function LayoutUser(props) {
  const { routes } = props;
  const classes = styles();
  const [open, setOpen] = useState(false);
  const { user, isLoading } = useAuth();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (!user && !isLoading) {
    return (
      <>
        <Route path="/login" component={Login} />
        <Redirect to="/login" />
      </>
    );
  }
  if (user && !isLoading) {
    console.log(user);
    return (
      <div className={classes.root}>
        <MenuTopUser open={open} handleDrawerOpen={handleDrawerOpen} />
        <DrawerUser open={open} handleDrawerClose={handleDrawerClose} />
        <div
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <LoadRoutes routes={routes} />
        </div>
        <Footer />
      </div>
    );
  }
  return null;
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
