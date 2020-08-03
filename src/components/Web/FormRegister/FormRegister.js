import React, { useState } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Select,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./FormRegister.scss";
import { Link } from "react-router-dom";

export default function FormRegister() {
  const [inputs, setInputs] = useState({
    typedoc: "",
    ndoc: "",
    names: "",
    lastname: "",
    email: "",
    tel: "",
    password: "",
    passwordRepeat: "",
    privacyPolicy: false,
  });

  const changeForm = (e) => {
    if (e.target.name === "privacyPolicy") {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.checked,
      });
    } else {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
    }
  };
  const register = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <form onChange={changeForm} onSubmit={register}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
        className="form-register"
      >
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="type-doc-required">
              Tipo de Documento
            </InputLabel>
            <Select
              native
              name="typedoc"
              value={inputs.typedoc}
              inputProps={{
                id: "type-doc-required",
              }}
            >
              <option aria-label="None" />
              <option value={10}>Cédula de Ciudadanía</option>
              <option value={20}>Cédula de Extranjería</option>
            </Select>
            <FormHelperText>Campo Obligatorio.</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="ndoc">Número de Identificación</InputLabel>
            <Input
              name="ndoc"
              aria-describedby="my-helper-text"
              value={inputs.ndoc}
            />
            <FormHelperText id="my-helper-text">
              Campo Obligatorio.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="names">Nombres</InputLabel>
            <Input
              name="names"
              aria-describedby="my-helper-text"
              value={inputs.names}
            />
            <FormHelperText id="my-helper-text">
              Campo Obligatorio.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="lastname">Apellidos</InputLabel>
            <Input
              name="lastname"
              aria-describedby="my-helper-text"
              value={inputs.lastname}
            />
            <FormHelperText id="my-helper-text">
              Campo Obligatorio.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="email">Correo Electrónico</InputLabel>
            <Input
              type="email"
              name="email"
              aria-describedby="my-helper-text"
              value={inputs.email}
            />
            <FormHelperText id="my-helper-text">
              Campo Obligatorio.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="cel">Celular</InputLabel>
            <Input
              name="tel"
              type="tel"
              aria-describedby="my-helper-text"
              value={inputs.tel}
            />
            <FormHelperText id="my-helper-text">
              Campo Obligatorio.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="pwd">Contraseña</InputLabel>
            <Input
              name="password"
              type="password"
              value={inputs.password}
              aria-describedby="my-helper-text"
            />
            <FormHelperText id="my-helper-text">
              Campo Obligatorio.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="pwd">Repetir Contraseña</InputLabel>
            <Input
              name="passwordrepeat"
              type="password"
              aria-describedby="my-helper-text"
              value={inputs.passwordRepeat}
            />
            <FormHelperText id="my-helper-text">
              Campo Obligatorio.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="privacyPolicy"
                  checked={inputs.privacyPolicy}
                  color="primary"
                />
              }
              label="He leído y acepto los Términos Legales y la Política de Privacidad de MiCrédito"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              endIcon={<ExitToAppIcon />}
            >
              Registrarme
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" color="initial">
              ¿Ya estás registrado? <Link to="/login">Inicia sesión aquí</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
