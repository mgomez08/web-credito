import React from "react";
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
  return (
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
          <InputLabel htmlFor="age-native-required">
            Tipo de Documento
          </InputLabel>
          <Select
            native
            name="age"
            inputProps={{
              id: "age-native-required",
            }}
          >
            <option aria-label="None" value="" />
            <option value={10}>Cédula de Ciudadanía</option>
            <option value={20}>Cédula de Extranjería</option>
          </Select>
          <FormHelperText>Campo Obligatorio.</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} lg={6}>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="ndoc">Número de Identificación</InputLabel>
          <Input id="ndoc" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            Campo Obligatorio.
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} lg={6}>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="names">Nombres</InputLabel>
          <Input id="names" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            Campo Obligatorio.
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} lg={6}>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="lastname">Apellidos</InputLabel>
          <Input id="lastname" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            Campo Obligatorio.
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} lg={6}>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="email">Correo Electrónico</InputLabel>
          <Input id="email" type="email" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            Campo Obligatorio.
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} lg={6}>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="cel">Celular</InputLabel>
          <Input id="tel" type="tel" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            Campo Obligatorio.
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} lg={6}>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="pwd">Contraseña</InputLabel>
          <Input id="pwd" type="password" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            Campo Obligatorio.
          </FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} lg={6}>
        <FormControl fullWidth={true}>
          <InputLabel htmlFor="pwdrepeat">Repetir Contraseña</InputLabel>
          <Input
            id="pwdrepeat"
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
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="He leído y acepto los Términos Legales y la Política de Privacidad de MiCrédito"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
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
  );
}
