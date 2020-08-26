import React, { useState } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Select,
  Button,
  Typography,
  Snackbar,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import {
  minLengthValidation,
  emailValidation,
} from "../../../../utils/formValidation";
import Alert from "@material-ui/lab/Alert";
import "./PersonalForm.scss";

export default function PersonalForm() {
  const [inputs, setInputs] = useState({
    names: "",
    lastname: "",
    datebirth: null,
    departbirth: "",
    citybirth: "",
    typedoc: "",
    ndoc: "",
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
  const [formValid, setFormValid] = useState({
    names: false,
    lastname: false,
    datebirth: false,
    departbirth: false,
    citybirth: false,
    typedoc: false,
    ndoc: false,
    age: false,
    educationallevel: false,
    profession: false,
    occupation: false,
    numpersonsfamilynucleus: false,
    numpersonsdependents: false,
    typehousing: false,
    departresidence: false,
    cityresidence: false,
    homeaddress: false,
    yearsresidence: false,
  });

  const inputValidation = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });

    const { type, name } = e.target;
    console.log(name);
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

  const handleDateChange = (date) => {};

  return (
    <form className="personal-form">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={4}
      >
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
          <KeyboardDatePicker
            className="personal-form__date"
            fullWidth={true}
            margin="normal"
            name="datebirth"
            aria-describedby="my-helper-text"
            label="Fecha de nacimiento"
            format="DD/MM/yyyy"
            value={inputs.datebirth}
            onChange={inputValidation}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <FormHelperText id="my-helper-text">
            Campo Obligatorio.
          </FormHelperText>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="depart-birth">
              Departamento de nacimiento
            </InputLabel>
            <Select
              native
              name="departbirth"
              value={inputs.departbirth}
              onChange={inputValidation}
              inputProps={{
                id: "depart-birth-required",
              }}
            >
              <option aria-label="None" />
              <option value={"Tolima"}>Tolima</option>
              <option value={"Cundinamarca"}>Cundinamarca</option>
            </Select>
            <FormHelperText>Campo Obligatorio.</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="city-birth">Cuidad de nacimiento</InputLabel>
            <Select
              native
              name="citybirth"
              value={inputs.citybirth}
              onChange={inputValidation}
              inputProps={{
                id: "city-birth-required",
              }}
            >
              <option aria-label="None" />
              <option value={"Espinal"}>Espinal</option>
              <option value={"Girardot"}>Girardot</option>
            </Select>
            <FormHelperText>Campo Obligatorio.</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="type-doc">Tipo de Documento</InputLabel>
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
              type="number"
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
            <InputLabel htmlFor="age">Edad</InputLabel>
            <Input
              type="number"
              error={false}
              name="age"
              aria-describedby="my-helper-text"
              onChange={inputValidation}
              value={inputs.age}
            />
            <FormHelperText id="my-helper-text">
              Campo Obligatorio.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="educational-level">
              Nivel de Estudio
            </InputLabel>
            <Select
              native
              name="educationallevel"
              value={inputs.educationallevel}
              onChange={inputValidation}
              inputProps={{
                id: "educational-level-required",
              }}
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
            <FormHelperText>Campo Obligatorio.</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="profession">Profesión</InputLabel>
            <Input
              name="profession"
              aria-describedby="my-helper-text"
              onChange={inputValidation}
              value={inputs.profession}
            />
            <FormHelperText id="my-helper-text">
              Campo Obligatorio.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="occupation">Ocupación</InputLabel>
            <Input
              name="occupation"
              aria-describedby="my-helper-text"
              onChange={inputValidation}
              value={inputs.occupation}
            />
            <FormHelperText id="my-helper-text">
              Campo Obligatorio.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="num-persons-family-nucleus">
              Número de personas de su Núcleo Familiar
            </InputLabel>
            <Input
              type="number"
              error={false}
              name="numpersonsfamilynucleus"
              aria-describedby="my-helper-text"
              onChange={inputValidation}
              value={inputs.numpersonsfamilynucleus}
            />
            <FormHelperText id="my-helper-text">
              Campo Obligatorio.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="num-persons-dependents">
              Número de personas a cargo
            </InputLabel>
            <Input
              type="number"
              error={false}
              name="numpersonsdependents"
              aria-describedby="my-helper-text"
              onChange={inputValidation}
              value={inputs.numpersonsdependents}
            />
            <FormHelperText id="my-helper-text">
              Campo Obligatorio.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="type-housing">Tipo de vivienda</InputLabel>
            <Select
              native
              name="typehousing"
              value={inputs.typehousing}
              onChange={inputValidation}
              inputProps={{
                id: "type-housing-required",
              }}
            >
              <option aria-label="None" />
              <option value={"Patrimonio"}>Patrimonio</option>
              <option value={"Propia"}>Propia</option>
              <option value={"Arriendo"}>Arriendo</option>
            </Select>
            <FormHelperText>Campo Obligatorio.</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="depart-residence">
              Departamento de residencia
            </InputLabel>
            <Select
              native
              name="departresidence"
              value={inputs.departresidence}
              onChange={inputValidation}
              inputProps={{
                id: "depart-birth-required",
              }}
            >
              <option aria-label="None" />
              <option value={"Tolima"}>Tolima</option>
              <option value={"Cundinamarca"}>Cundinamarca</option>
            </Select>
            <FormHelperText>Campo Obligatorio.</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="city-residence">
              Cuidad de residencia
            </InputLabel>
            <Select
              native
              name="cityresidence"
              value={inputs.cityresidence}
              onChange={inputValidation}
              inputProps={{
                id: "city-residence-required",
              }}
            >
              <option aria-label="None" />
              <option value={"Espinal"}>Espinal</option>
              <option value={"Girardot"}>Girardot</option>
            </Select>
            <FormHelperText>Campo Obligatorio.</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="home-address">
              Dirección de vivienda
            </InputLabel>
            <Input
              name="homeaddress"
              aria-describedby="my-helper-text"
              onChange={inputValidation}
              value={inputs.homeaddress}
            />
            <FormHelperText id="my-helper-text">
              Campo Obligatorio.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="years-residence">
              Años en la dirección actual
            </InputLabel>
            <Input
              type="number"
              error={false}
              name="yearsresidence"
              aria-describedby="my-helper-text"
              onChange={inputValidation}
              value={inputs.yearsresidence}
            />
            <FormHelperText id="my-helper-text">
              Campo Obligatorio.
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
}
