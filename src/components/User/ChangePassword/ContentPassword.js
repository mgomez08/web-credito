import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { FormPassword } from "./FormPassword";

export default function ContentPassword() {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography color="initial" align="justify" variant="body1">
        Para cambiar su contraseña, debe ingresar su contraseña actual y dos
        veces su nueva contraseña.
      </Typography>
      <FormPassword />
    </Grid>
  );
}
