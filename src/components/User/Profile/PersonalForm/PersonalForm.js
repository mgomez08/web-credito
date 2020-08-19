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
import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import {
  minLengthValidation,
  emailValidation,
} from "../../../../utils/formValidation";
import Alert from "@material-ui/lab/Alert";
import "./PersonalForm.scss";

export default function PersonalForm() {
  const [selectedDate, setSelectedDate] = useState(new Date());

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
      </Grid>
    </form>
  );
}
