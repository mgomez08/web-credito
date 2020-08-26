import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";
import HorizontalTab from "./HorizontalTab";
import VerticalTab from "./VerticalTab";
import "./InformationTabs.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "auto",
  },
}));
export default function InformationTabs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden mdUp>
        <HorizontalTab />
      </Hidden>
      <Hidden smDown>
        <VerticalTab />
      </Hidden>
    </div>
  );
}
