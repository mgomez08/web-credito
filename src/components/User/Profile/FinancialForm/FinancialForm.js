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
import Alert from "@material-ui/lab/Alert";
import { KeyboardDatePicker } from "@material-ui/pickers";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useForm } from "react-hook-form";
import "./FinancialForm.scss";

export default function FinancialForm() {
  const { register, errors, handleSubmit } = useForm();
  const [open, setOpen] = React.useState(false);
  const [inputs, setInputs] = useState({
    yearsexperience: "",
    datecurrentjob: null,
    workposition: "",
    typesalary: "",
    typecontract: "",
    monthlysalary: "",
    monthlyexpenditure: "",
  });

  const handleChange = (e) => {
    try {
      if (e.target) {
        setInputs({
          ...inputs,
          [e.target.name]: e.target.value,
        });
      } else {
        const datecurrentjob = "datecurrentjob";
        setInputs({
          ...inputs,
          [datecurrentjob]: e._d,
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
    <form onSubmit={handleSubmit(onSubmit)} className="financial-form">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={4}
      >
        <Grid item xs={12} lg={6}>
          <TextField
            label="Años de experiencia en el trabajo actual"
            variant="outlined"
            color="secondary"
            fullWidth
            type="number"
            name="yearsexperience"
            onChange={handleChange}
            defaultValue={inputs.yearsexperience}
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
            {errors?.yearsexperience?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <KeyboardDatePicker
            fullWidth={true}
            color="secondary"
            inputVariant="outlined"
            margin="normal"
            name="datecurrentjob"
            mask="__/__/____"
            autoOk={true}
            label="Fecha de ingreso a su trabajo actual"
            openTo="year"
            invalidDateMessage="Formato de fecha Invalido"
            allowKeyboardControl={true}
            maxDateMessage="La fecha ingresada no es valida"
            format="DD/MM/yyyy"
            maxDate={new Date()}
            value={inputs.datecurrentjob}
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
            {errors?.datecurrentjob?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            color="secondary"
            variant="outlined"
            fullWidth
            name="workposition"
            label="Cargo que desempeña en su trabajo"
            onChange={handleChange}
            defaultValue={inputs.workposition}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
              pattern: {
                value: /^([a-z ñáéíóú])+$/i,
                message: "Solo puede ingresar letras en el cargo que desempeña",
              },
            })}
          />
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.workposition?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="typesalary">Tipo de Salario</InputLabel>
            <Select
              native
              name="typesalary"
              label="Tipo de Salario"
              onChange={handleChange}
              defaultValue={inputs.typesalary}
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              <option value={"Quincenal"}>Quincenal</option>
              <option value={"Mensual"}>Mensual</option>
              <option value={"Por horas"}>Por horas</option>
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.typesalary?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="typecontract">Tipo de Contrato</InputLabel>
            <Select
              native
              name="typecontract"
              label="Tipo de Contrato"
              onChange={handleChange}
              defaultValue={inputs.typecontract}
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              <option value={"Definido"}>Definido</option>
              <option value={"Indefinido"}>Indefinido</option>
              <option value={"Prestación de Servicios"}>
                Prestación de Servicios
              </option>
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.typecontract?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Ingreso mensual base"
            variant="outlined"
            color="secondary"
            fullWidth
            type="number"
            name="monthlysalary"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            onChange={handleChange}
            defaultValue={inputs.monthlysalary}
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
            {errors?.monthlysalary?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Promedio egresos mensuales"
            variant="outlined"
            color="secondary"
            fullWidth
            type="number"
            name="monthlyexpenditure"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            onChange={handleChange}
            defaultValue={inputs.monthlyexpenditure}
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
            {errors?.monthlyexpenditure?.message}
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
              Guardar información
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