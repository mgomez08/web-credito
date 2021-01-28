import React, { useState } from "react";
import clsx from "clsx";
import { Route, Switch } from "react-router-dom";
import "./LayoutBasic.scss";
import MenuTop from "../components/Web/MenuTop";
import Footer from "../components/Web/Footer";
import { makeStyles } from "@material-ui/core";
import Drawer from "../components/Web/MenuTop/Drawer";

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

export default function LayoutBasic(props) {
  const { routes } = props;
  const classes = styles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <MenuTop open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer open={open} handleDrawerClose={handleDrawerClose} />
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {/* <LoadRoutes routes={routes} /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
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
