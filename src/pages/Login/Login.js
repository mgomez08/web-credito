import React from "react";
import FormLogin from "../../components/Web/FormLogin";
import { Grid, Typography } from "@material-ui/core";
import "./Login.scss";

export default function Login() {
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="form-title"
      >
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Typography color="initial" variant="h2">
                Inicia Sesión en MiCrédito
              </Typography>
            </Grid>
            <Grid item>
              <FormLogin />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </div>
  );
}
