import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Typography,
} from "@material-ui/core";
import "./FormLogin.scss";

import { Link } from "react-router-dom";

export default function FormLogin() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={3}
      className="form-login"
    >
      <Grid item xs={12}>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="email">Correo Electrónico </InputLabel>
          <Input id="email" type="email" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            Campo Obligatorio.
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="pwd">Contraseña</InputLabel>
          <Input id="pwd" type="password" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            Campo Obligatorio.
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Button size="large" variant="contained" color="primary">
            Iniciar Sesión
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="initial">
            ¿Aún no estás registrado?
            <Link to="/register">Regístrate aquí</Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
