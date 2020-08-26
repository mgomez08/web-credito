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
  Snackbar,
} from "@material-ui/core";
import {
  minLengthValidation,
  emailValidation,
} from "../../../utils/formValidation";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Alert from "@material-ui/lab/Alert";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { signUpApi } from "../../../api/user";
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
    showPassword: false,
  });

  const [formValid, setFormValid] = useState({
    typedoc: false,
    ndoc: false,
    names: false,
    lastname: false,
    email: false,
    tel: false,
    password: false,
    passwordRepeat: false,
    privacyPolicy: false,
  });

  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState("");
  const [typemessage, setTypeMessage] = useState("success");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const inputValidation = (e) => {
    const { type, name } = e.target;
    if (name === "ndoc") {
      setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 8) });
    }
    if (type === "tel") {
      setFormValid({
        ...formValid,
        [name]: minLengthValidation(e.target, 10),
      });
    }
    if (type === "email") {
      setFormValid({
        ...formValid,
        [name]: emailValidation(e.target),
      });
    }
    if (type === "password") {
      setFormValid({
        ...formValid,
        [name]: minLengthValidation(e.target, 6),
      });
    }
    if (type === "checkbox") {
      setFormValid({
        ...formValid,
        [name]: e.target.checked,
      });
    }
  };
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

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const resetForm = () => {
    setInputs({
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
    setFormValid({
      typedoc: false,
      ndoc: false,
      names: false,
      lastname: false,
      email: false,
      tel: false,
      password: false,
      passwordRepeat: false,
      privacyPolicy: false,
    });
  };
  const register = async (e) => {
    e.preventDefault();
    if (
      !inputs.typedoc ||
      !inputs.ndoc ||
      !inputs.names ||
      !inputs.lastname ||
      !inputs.email ||
      !inputs.tel ||
      !inputs.password ||
      !inputs.passwordRepeat ||
      !inputs.privacyPolicy
    ) {
      setTypeMessage("warning");
      setMessage("Todos los campos deben ser llenados.");
    } else if (inputs.password !== inputs.passwordRepeat) {
      setTypeMessage("error");
      setMessage("Las contraseñas deben ser iguales");
    } else {
      const result = await signUpApi(inputs);
      if (!result.ok) {
        setTypeMessage("error");
        setMessage(result.message);
      } else {
        setTypeMessage("success");
        setMessage(result.message);
        resetForm();
      }
    }
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
              onChange={inputValidation}
              inputProps={{
                id: "type-doc-required",
              }}
            >
              <option aria-label="None" />
              <option value={"CC"}>Cédula de Ciudadanía</option>
              <option value={"CT"}>Cédula de Extranjería</option>
            </Select>
            <FormHelperText>Campo Obligatorio.</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="ndoc">Número de Identificación</InputLabel>
            <Input
              error={false}
              name="ndoc"
              aria-describedby="my-helper-text"
              onChange={inputValidation}
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
              onChange={inputValidation}
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
              onChange={inputValidation}
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
              onChange={inputValidation}
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
              onChange={inputValidation}
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
              type={showPassword ? "text" : "password"}
              onChange={inputValidation}
              value={inputs.password}
              aria-describedby="my-helper-text"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
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
              name="passwordRepeat"
              type={showPassword ? "text" : "password"}
              onChange={inputValidation}
              aria-describedby="my-helper-text"
              value={inputs.passwordRepeat}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
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
                  onChange={inputValidation}
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
              onClick={handleClick}
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
