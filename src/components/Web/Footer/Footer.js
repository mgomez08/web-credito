import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Info from "./Info";
import NavigationFooter from "./NavigationFooter";

import "./Footer.scss";

const useStyles = makeStyles((theme) => ({
  sticky: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.sticky+' footer'}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Info />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <NavigationFooter />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Grid container className="footer__copyright">
            <Grid item xs={6}>
              © 2021 ALL RIGHTS RESERVED
            </Grid>
            <Grid item xs={6}>
              MICRÉDITO
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </footer>
  );
}
