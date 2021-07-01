import React from "react";
import { Grid, Typography } from "@material-ui/core";
import FormRegister from "../../components/Web/FormRegister";
import { Redirect } from "react-router-dom";
import { getAccessTokenApi } from "../../api/auth";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  title: { 
    paddingBottom: theme.spacing(2),
  }
}))

export default function Register() {
  const classes = useStyles();
  if (getAccessTokenApi()) {
    return <Redirect to="/user" />;
  }
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item className={classes.title}>
            <Typography color="initial" variant="h2">
              Regístrate en MiCrédito
            </Typography>
          </Grid>
          <Grid item>
            <FormRegister />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
}
