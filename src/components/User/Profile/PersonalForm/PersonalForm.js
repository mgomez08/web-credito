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
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
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
              //onChange={inputValidation}
              //value={inputs.names}
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
              // onChange={inputValidation}
              // value={inputs.lastname}
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
            id="date-picker-dialog"
            aria-describedby="my-helper-text"
            label="Fecha de nacimiento"
            format="DD/MM/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
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
              name="depart-birth"
              //   value={inputs.typedoc}
              //   onChange={inputValidation}
              inputProps={{
                id: "depart-birth-required",
              }}
            >
              <option aria-label="None" />
              <option value={"CC"}>Tolima</option>
              <option value={"CT"}>Cundinamarca</option>
            </Select>
            <FormHelperText>Campo Obligatorio.</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="city-birth">Cuidad de nacimiento</InputLabel>
            <Select
              native
              name="city-birth"
              //   value={inputs.typedoc}
              //   onChange={inputValidation}
              inputProps={{
                id: "city-birth-required",
              }}
            >
              <option aria-label="None" />
              <option value={"CC"}>Espinal</option>
              <option value={"CT"}>Girardot</option>
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
              //   value={inputs.typedoc}
              //   onChange={inputValidation}
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
              //   onChange={inputValidation}
              //   value={inputs.ndoc}
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
              //   onChange={inputValidation}
              //   value={inputs.ndoc}
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
              name="educational-level"
              //   value={inputs.typedoc}
              //   onChange={inputValidation}
              inputProps={{
                id: "educational-level-required",
              }}
            >
              <option aria-label="None" />
              <option value={"CC"}>Bachiller</option>
              <option value={"CT"}>Técnico</option>
              <option value={"CC"}>Tecnólogo</option>
              <option value={"CT"}>Profesional</option>
              <option value={"CC"}>Especialista</option>
              <option value={"CT"}>Magister</option>
              <option value={"CT"}>Doctorado</option>
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
              //onChange={inputValidation}
              //value={inputs.names}
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
              //onChange={inputValidation}
              //value={inputs.names}
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
              name="num-persons-family-nucleus"
              aria-describedby="my-helper-text"
              //   onChange={inputValidation}
              //   value={inputs.ndoc}
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
              name="num-persons-dependents"
              aria-describedby="my-helper-text"
              //   onChange={inputValidation}
              //   value={inputs.ndoc}
            />
            <FormHelperText id="my-helper-text">
              Campo Obligatorio.
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="type-doc">Tipo de vivienda</InputLabel>
            <Select
              native
              name="typedoc"
              //   value={inputs.typedoc}
              //   onChange={inputValidation}
              inputProps={{
                id: "type-doc-required",
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
              name="depart-residence"
              //   value={inputs.typedoc}
              //   onChange={inputValidation}
              inputProps={{
                id: "depart-birth-required",
              }}
            >
              <option aria-label="None" />
              <option value={"CC"}>Tolima</option>
              <option value={"CT"}>Cundinamarca</option>
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
              name="city-residence"
              //   value={inputs.typedoc}
              //   onChange={inputValidation}
              inputProps={{
                id: "city-birth-required",
              }}
            >
              <option aria-label="None" />
              <option value={"CC"}>Espinal</option>
              <option value={"CT"}>Girardot</option>
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
              name="home-address"
              aria-describedby="my-helper-text"
              //onChange={inputValidation}
              //value={inputs.names}
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
              name="years-residence"
              aria-describedby="my-helper-text"
              //   onChange={inputValidation}
              //   value={inputs.ndoc}
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
