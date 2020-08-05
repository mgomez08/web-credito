import React, { useState } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Typography,
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import "./FormLogin.scss";
import { signInApi } from "../../../api/user";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";
import { Link } from "react-router-dom";

export default function FormLogin() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState("");
  const [typemessage, setTypeMessage] = useState("success");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const login = async (e) => {
    e.preventDefault();
    const result = await signInApi(inputs);

    if (result.message) {
      setTypeMessage("error");
      setMessage(result.message);
    } else {
      const { accessToken, refreshToken } = result;
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);
      setTypeMessage("success");
      setMessage("Login correcto, redirigiendo");
      window.location.href = "/user";
    }
  };

  return (
    <form onChange={changeForm} onSubmit={login}>
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
            <Input
              id="email"
              name="email"
              type="email"
              aria-describedby="my-helper-text"
            />
            <FormHelperText id="my-helper-text">
              Campo Obligatorio.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="pwd">Contraseña</InputLabel>
            <Input
              id="pwd"
              name="password"
              type="password"
              aria-describedby="my-helper-text"
            />
            <FormHelperText id="my-helper-text">
              Campo Obligatorio.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12}>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={handleClick}
              type="submit"
            >
              Iniciar Sesión
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" color="initial">
              ¿Aún no estás registrado?
              <Link to="/register"> Regístrate aquí</Link>
            </Typography>
          </Grid>
        </Grid>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} variant="filled" severity={typemessage}>
            {message}
          </Alert>
        </Snackbar>
      </Grid>
    </form>
  );
}
