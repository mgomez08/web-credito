import React from "react";
import { Grid, Typography } from "@material-ui/core";
import FormRegister from "../../components/Web/FormRegister";
import "./Register.scss";
export default function Register() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className="form-title"
    >
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Typography color="initial" variant="h2">
              Regístrate en MiCrédito
            </Typography>
          </Grid>
          <Grid item>
            <FormRegister />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}
