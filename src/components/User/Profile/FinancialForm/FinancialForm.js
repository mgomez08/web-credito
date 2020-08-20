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
import InputAdornment from "@material-ui/core/InputAdornment";
import "./FinancialForm.scss";

export default function FinancialForm() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <form className="financial-form">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={4}
      >
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="years-experience">
              Años de experiencia en el trabajo actual
            </InputLabel>
            <Input
              type="number"
              error={false}
              name="years-experience"
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
          <KeyboardDatePicker
            fullWidth={true}
            margin="normal"
            id="date-picker-dialog"
            aria-describedby="my-helper-text"
            label="Fecha de ingreso de trabajo actual"
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
            <InputLabel htmlFor="work-position">
              Cargo que desempeña en su trabajo
            </InputLabel>
            <Input
              name="work-position"
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
            <InputLabel htmlFor="type-salary">Tipo de Salario</InputLabel>
            <Select
              native
              name="type-salary"
              //   value={inputs.typedoc}
              //   onChange={inputValidation}
              inputProps={{
                id: "type-salary-required",
              }}
            >
              <option aria-label="None" />
              <option value={"CC"}>Quincenal</option>
              <option value={"CT"}>Mensual</option>
              <option value={"CT"}>Por horas</option>
            </Select>
            <FormHelperText>Campo Obligatorio.</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="type-contract">Tipo de Contrato</InputLabel>
            <Select
              native
              name="type-contract"
              //   value={inputs.typedoc}
              //   onChange={inputValidation}
              inputProps={{
                id: "type-contract-required",
              }}
            >
              <option aria-label="None" />
              <option value={"CC"}>Definido</option>
              <option value={"CT"}>Indefinido</option>
              <option value={"CT"}>Prestación de Servicios</option>
            </Select>
            <FormHelperText>Campo Obligatorio.</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth={true}>
            <InputLabel htmlFor="monthly -salary">
              Ingreso mensual base
            </InputLabel>
            <Input
              type="number"
              error={false}
              name="monthly -salary"
              aria-describedby="my-helper-text"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
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
            <InputLabel htmlFor="monthly expenditure">
              Promedio egresos mensuales{" "}
            </InputLabel>
            <Input
              type="number"
              error={false}
              name="monthly-expenditure"
              aria-describedby="my-helper-text"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
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
