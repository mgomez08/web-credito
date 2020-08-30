import React, { useState } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Button,
  Typography,
  Snackbar,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import Alert from "@material-ui/lab/Alert";
import "./PersonalForm.scss";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  Departments,
  Citys,
  getIdDepartment,
} from "../../../../utils/FormObjects";
import { useForm } from "react-hook-form";

export default function PersonalForm() {
  const { register, errors, handleSubmit } = useForm();
  const [open, setOpen] = React.useState(false);
  const [inputs, setInputs] = useState({
    names: "",
    lastname: "",
    datebirth: null,
    departbirth: "",
    citybirth: "",
    typedoc: "",
    ndoc: "",
    tel: "",
    age: "",
    educationallevel: "",
    profession: "",
    occupation: "",
    numpersonsfamilynucleus: "",
    numpersonsdependents: "",
    typehousing: "",
    departresidence: "",
    cityresidence: "",
    homeaddress: "",
    yearsresidence: "",
  });
  const handleChange = (e) => {
    try {
      if (e.target) {
        setInputs({
          ...inputs,
          [e.target.name]: e.target.value,
        });
      } else {
        const datebirth = "datebirth";
        setInputs({
          ...inputs,
          [datebirth]: e._d,
        });
      }
    } catch (error) {}
  };
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = (data, e) => {
    console.log(data);
    setInputs({
      ...inputs,
      data,
    });
    handleClick();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="personal-form">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={4}
      >
        <Grid item xs={12} lg={6}>
          <TextField
            label="Nombres"
            color="secondary"
            variant="outlined"
            fullWidth
            name="names"
            onChange={handleChange}
            defaultValue={inputs.names}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
              pattern: {
                value: /^([a-z ñáéíóú])+$/i,
                message: "Solo puede ingresar letras en su nombre",
              },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.names?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Apellidos"
            variant="outlined"
            color="secondary"
            fullWidth
            name="lastname"
            onChange={handleChange}
            defaultValue={inputs.lastname}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
              pattern: {
                value: /^([a-z ñáéíóú])+$/i,
                message: "Solo puede ingresar letras en su apellido",
              },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.lastname?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <KeyboardDatePicker
            fullWidth={true}
            color="secondary"
            inputVariant="outlined"
            margin="normal"
            name="datebirth"
            mask="__/__/____"
            autoOk={true}
            label="Fecha de nacimiento"
            openTo="year"
            invalidDateMessage="Formato de fecha Invalido"
            allowKeyboardControl={true}
            maxDateMessage="La fecha ingresada no es valida"
            format="DD/MM/yyyy"
            maxDate={new Date()}
            value={inputs.datebirth}
            onChange={handleChange}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.datebirth?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="departbirth">
              Departamento de Nacimiento
            </InputLabel>
            <Select
              native
              name="departbirth"
              defaultValue={inputs.departbirth}
              onChange={handleChange}
              label="Departamento de Nacimiento"
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              {Departments().map((Departament) => {
                return (
                  <option key={Departament.id} value={Departament.name}>
                    {Departament.name}
                  </option>
                );
              })}
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.departbirth?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="city-birth">Cuidad de nacimiento</InputLabel>
            <Select
              native
              name="citybirth"
              defaultValue={inputs.citybirth}
              onChange={handleChange}
              label="Cuidad de Nacimiento"
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              {Citys(getIdDepartment(inputs.departbirth, Departments())).map(
                (City) => {
                  return (
                    <option key={City.id} value={City.name}>
                      {City.name}
                    </option>
                  );
                }
              )}
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.citybirth?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="type-doc">Tipo de Documento</InputLabel>
            <Select
              native
              name="typedoc"
              defaultValue={inputs.typedoc}
              onChange={handleChange}
              label="Tipo de Documento"
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              <option value={"CC"}>Cédula de Ciudadanía</option>
              <option value={"CT"}>Cédula de Extranjería</option>
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.typedoc?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Número de Identificación"
            variant="outlined"
            color="secondary"
            fullWidth
            type="number"
            name="ndoc"
            onChange={handleChange}
            defaultValue={inputs.ndoc}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
              minLength: {
                value: 8,
                message:
                  "El número de identificación debe tener mínimo 8 digitos",
              },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.ndoc?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label=" Celular"
            variant="outlined"
            color="secondary"
            fullWidth
            type="number"
            name="tel"
            onChange={handleChange}
            defaultValue={inputs.tel}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
              minLength: {
                value: 10,
                message: "El número de celular debe tener mínimo 10 digitos",
              },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.tel?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Edad"
            variant="outlined"
            color="secondary"
            fullWidth
            type="number"
            name="age"
            onChange={handleChange}
            defaultValue={inputs.age}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.age?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="educational-level">
              Nivel de Estudio
            </InputLabel>
            <Select
              native
              name="educationallevel"
              defaultValue={inputs.educationallevel}
              onChange={handleChange}
              label="Nivel de Estudio"
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              <option value={"Bachiller"}>Bachiller</option>
              <option value={"Técnico"}>Técnico</option>
              <option value={"Tecnólogo"}>Tecnólogo</option>
              <option value={"Profesional"}>Profesional</option>
              <option value={"Especialista"}>Especialista</option>
              <option value={"Magister"}>Magister</option>
              <option value={"Doctorado"}>Doctorado</option>
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.educationallevel?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Profesión"
            variant="outlined"
            color="secondary"
            fullWidth
            name="profession"
            onChange={handleChange}
            defaultValue={inputs.profession}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
              pattern: {
                value: /^([a-z ñáéíóú])+$/i,
                message: "Solo puede ingresar letras en su profesión",
              },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.profession?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Ocupación"
            variant="outlined"
            color="secondary"
            fullWidth
            name="occupation"
            onChange={handleChange}
            defaultValue={inputs.occupation}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
              pattern: {
                value: /^([a-z ñáéíóú])+$/i,
                message: "Solo puede ingresar letras en su ocupación",
              },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.occupation?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Número de personas de su Núcleo Familiar"
            variant="outlined"
            color="secondary"
            fullWidth
            type="number"
            name="numpersonsfamilynucleus"
            onChange={handleChange}
            defaultValue={inputs.numpersonsfamilynucleus}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.numpersonsfamilynucleus?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Número de personas a cargo suyo"
            variant="outlined"
            color="secondary"
            fullWidth
            type="number"
            name="numpersonsdependents"
            onChange={handleChange}
            defaultValue={inputs.numpersonsdependents}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.numpersonsdependents?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="type-housing">Tipo de Vivienda</InputLabel>
            <Select
              native
              name="typehousing"
              defaultValue={inputs.typehousing}
              onChange={handleChange}
              label="Tipo de Vivienda"
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              <option value={"Patrimonio"}>Patrimonio</option>
              <option value={"Propia"}>Propia</option>
              <option value={"Arriendo"}>Arriendo</option>
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.typehousing?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="depart-residence">
              Departamento de residencia
            </InputLabel>
            <Select
              native
              name="departresidence"
              defaultValue={inputs.departresidence}
              onChange={handleChange}
              label="Departamento de Residencia"
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              {Departments().map((Departament) => {
                return (
                  <option key={Departament.id} value={Departament.name}>
                    {Departament.name}
                  </option>
                );
              })}
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.departresidence?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="city-residence">
              Cuidad de residencia
            </InputLabel>
            <Select
              native
              name="cityresidence"
              defaultValue={inputs.cityresidence}
              onChange={handleChange}
              label="Cuidad de Residencia"
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              {Citys(
                getIdDepartment(inputs.departresidence, Departments())
              ).map((City) => {
                return (
                  <option key={City.id} value={City.name}>
                    {City.name}
                  </option>
                );
              })}
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.cityresidence?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Dirección de Residencia"
            variant="outlined"
            color="secondary"
            fullWidth
            name="homeaddress"
            onChange={handleChange}
            defaultValue={inputs.homeaddress}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.homeaddress?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Años en la dirección actual"
            variant="outlined"
            color="secondary"
            fullWidth
            type="number"
            name="yearsresidence"
            onChange={handleChange}
            defaultValue={inputs.yearsresidence}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.yearsresidence?.message}
          </Typography>
        </Grid>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12}>
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              endIcon={<ExitToAppIcon />}
            >
              Guardar información personal
            </Button>
          </Grid>
        </Grid>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} variant="filled" severity="success">
            Información personal guardada.
          </Alert>
        </Snackbar>
      </Grid>
    </form>
  );
}
