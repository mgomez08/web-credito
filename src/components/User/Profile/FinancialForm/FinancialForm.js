import React from "react";
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
import { useForm } from "react-hook-form";
import "./FinancialForm.scss";
import moment from "moment";

export default function FinancialForm(props) {
  const {
    userFinancialData,
    setUserFinancialData,
    onSubmitFinancial,
    open,
    setOpen,
    openError,
    setOpenError,
    message,
  } = props;
  const { register, errors, handleSubmit, reset } = useForm();

  const handleChange = (e) => {
    try {
      if (e.target) {
        setUserFinancialData({
          ...userFinancialData,
          [e.target.name]: e.target.value,
        });
      } else {
        const yearsDiff = moment().diff(e, "years", false);
        setUserFinancialData({
          ...userFinancialData,
          [`yearsexperience`]: yearsDiff,
          [`datecurrentjob`]: e._d,
        });
        reset({ ...userFinancialData, yearsexperience: yearsDiff });
      }
    } catch (error) {}
  };

  const handleClose = () => {
    setOpen(false);
    setOpenError(false);
  };
  const validcreditinstitution = () => {
    if (userFinancialData.havecredits === "Si") {
      return true;
    } else {
      return false;
    }
  };
  const validsavingsaccounts = () => {
    if (userFinancialData.havesavingsaccount === "Si") {
      return true;
    } else {
      return false;
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmitFinancial)} className="financial-form">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={4}
      >
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
            value={userFinancialData.datecurrentjob}
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
            label="Años de experiencia en el trabajo actual"
            variant="outlined"
            color="secondary"
            fullWidth
            disabled
            type="number"
            name="yearsexperience"
            onChange={handleChange}
            defaultValue={userFinancialData.yearsexperience}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
              pattern: {
                value: /^[^.,-]?\d+$/i,
                message: "Solo puede ingresar números enteros y positivos.",
              },
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
          <TextField
            color="secondary"
            variant="outlined"
            fullWidth
            multiline
            name="workposition"
            label="Cargo que desempeña en su trabajo"
            onChange={handleChange}
            defaultValue={userFinancialData.workposition}
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
              defaultValue={userFinancialData.typesalary}
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
              defaultValue={userFinancialData.typecontract}
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
              <option value={"Obra o Labor"}>Obra o Labor</option>
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
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="totalassets">
              Activos Totales (bienes, etc)
            </InputLabel>
            <Select
              native
              name="totalassets"
              label="Activos totales (bienes, titulos de valor, etc)"
              onChange={handleChange}
              defaultValue={userFinancialData.totalassets}
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              <option value={"1"}>Menor a 5.000.000 Pesos Colombianos</option>
              <option value={"2"}>
                Entre 5.000.001 y 10.000.000 Pesos Colombianos
              </option>
              <option value={"3"}>Mayor a 10.000.001 Pesos Colombianos</option>
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.totalassets?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="monthlysalary">
              Salario mensual base
            </InputLabel>
            <Select
              native
              name="monthlysalary"
              label="Salario mensual base"
              onChange={handleChange}
              defaultValue={userFinancialData.monthlysalary}
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              <option value={"1"}>
                Menor o Igual a 1.000.000 Pesos Colombianos
              </option>
              <option value={"2"}>
                Entre 1.000.001 y 3.000.000 Pesos Colombianos
              </option>
              <option value={"3"}>Mayor a 3.000.001 Pesos Colombianos</option>
            </Select>
          </FormControl>
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
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="additionalincome">
              Ingresos adicionales
            </InputLabel>
            <Select
              native
              name="additionalincome"
              label="Ingresos adicionales"
              onChange={handleChange}
              defaultValue={userFinancialData.additionalincome}
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              <option value={"1"}>No posee ingresos adicionales</option>
              <option value={"2"}>
                Menor o Igual a 1.000.000 Pesos Colombianos
              </option>
              <option value={"3"}>
                Entre 1.000.001 y 5.000.000 Pesos Colombianos
              </option>
              <option value={"4"}>Mayor a 5.000.001 Pesos Colombianos</option>
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.additionalincome?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="totalmonthlyincome">
              Ingresos mensuales totales
            </InputLabel>
            <Select
              native
              name="totalmonthlyincome"
              label="Ingresos mensuales totales"
              onChange={handleChange}
              defaultValue={userFinancialData.totalmonthlyincome}
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              <option value={"1"}>
                Menor o Igual a 1.000.000 Pesos Colombianos
              </option>
              <option value={"2"}>
                Entre 1.000.001 y 5.000.000 Pesos Colombianos
              </option>
              <option value={"3"}>
                Entre 5.000.001 y 10.000.000 Pesos Colombianos
              </option>
              <option value={"4"}>Mayor a 10.000.001 Pesos Colombianos</option>
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.totalmonthlyincome?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="monthlyexpenditure">
              Promedio egresos mensuales
            </InputLabel>
            <Select
              native
              name="monthlyexpenditure"
              label="Promedio egresos mensuales"
              onChange={handleChange}
              defaultValue={userFinancialData.monthlyexpenditure}
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              <option value={"1"}>Menor a 1.000.000 Pesos Colombianos</option>
              <option value={"2"}>
                Entre 1.000.001 y 5.000.000 Pesos Colombianos
              </option>
              <option value={"3"}>
                Entre 5.000.001 y 10.000.000 Pesos Colombianos
              </option>
              <option value={"4"}>Mayor a 10.000.001 Pesos Colombianos</option>
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.monthlyexpenditure?.message}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="havecredits">
              ¿Tiene créditos con alguna entidad financiera?
            </InputLabel>
            <Select
              native
              name="havecredits"
              label="¿Tiene créditos con alguna entidad financiera?"
              onChange={handleChange}
              defaultValue={userFinancialData.havecredits}
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              <option value={"Si"}>Sí</option>
              <option value={"No"}>No</option>
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.havecredits?.message}
          </Typography>
        </Grid>
        {validcreditinstitution() ? (
          <>
            <Grid item xs={12} lg={6}>
              <FormControl
                variant="outlined"
                color="secondary"
                fullWidth={true}
              >
                <InputLabel htmlFor="amountcreditacquired">
                  ¿Entre qué rangos de precios está el crédito adquirido?
                </InputLabel>
                <Select
                  native
                  name="amountcreditacquired"
                  label="¿Entre qué rangos de precios está el crédito adquirido?"
                  onChange={handleChange}
                  defaultValue={userFinancialData.amountcreditacquired}
                  inputRef={register({
                    required: { value: true, message: "Campo obligatorio" },
                  })}
                >
                  <option aria-label="None" />
                  <option value={"1"}>
                    Menor o Igual a 1.000.000 Pesos Colombianos
                  </option>
                  <option value={"2"}>
                    Entre 1.000.001 y 5.000.000 Pesos Colombianos
                  </option>
                  <option value={"3"}>
                    Entre 5.000.001 y 10.000.000 Pesos Colombianos
                  </option>
                  <option value={"4"}>
                    Mayor a 10.000.001 Pesos Colombianos
                  </option>
                </Select>
              </FormControl>
              <Typography
                variant="body1"
                display="block"
                color="error"
                gutterBottom
              >
                {errors?.amountcreditacquired?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <FormControl
                variant="outlined"
                color="secondary"
                fullWidth={true}
              >
                <InputLabel htmlFor="bankentity">
                  ¿En cuál entidad lo solicitó?
                </InputLabel>
                <Select
                  native
                  name="bankentity"
                  label="¿En cuál entidad lo solicitó?"
                  onChange={handleChange}
                  defaultValue={userFinancialData.bankentity}
                  inputRef={register({
                    required: { value: true, message: "Campo obligatorio" },
                  })}
                >
                  <option aria-label="None" />
                  <option value={"1"}>Banco Agrario de Colombia</option>
                  <option value={"2"}>Banco AV Villas</option>
                  <option value={"3"}>Banco Caja Social</option>
                  <option value={"4"}>Banco de Occidente</option>
                  <option value={"5"}>Banco de Bogotá</option>
                  <option value={"6"}>Bancolombia</option>
                  <option value={"7"}>Banco Mundo Mujer</option>
                  <option value={"8"}>Banco Popular</option>
                  <option value={"9"}>Banco Santander</option>
                  <option value={"10"}>Banco BBVA</option>
                  <option value={"11"}>Option 11</option>
                  <option value={"12"}>Citi Bank</option>
                  <option value={"13"}>Colpatria</option>
                  <option value={"14"}>Banco Davivienda</option>
                  <option value={"15"}>Itau</option>
                  <option value={"16"}>Otro</option>
                </Select>
              </FormControl>
              <Typography
                variant="body1"
                display="block"
                color="error"
                gutterBottom
              >
                {errors?.bankentity?.message}
              </Typography>
            </Grid>
          </>
        ) : (
          <br />
        )}
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="havesavingsaccount">
              ¿Posee cuentas de ahorro con alguna entidad financiera?
            </InputLabel>
            <Select
              native
              name="havesavingsaccount"
              label="¿Posee cuentas de ahorro con alguna entidad financiera?"
              onChange={handleChange}
              defaultValue={userFinancialData.havesavingsaccount}
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              <option value={"Si"}>Sí</option>
              <option value={"No"}>No</option>
            </Select>
          </FormControl>
          <Typography
            variant="body1"
            display="block"
            color="error"
            gutterBottom
          >
            {errors?.havesavingsaccount?.message}
          </Typography>
        </Grid>
        {validsavingsaccounts() ? (
          <Grid item xs={12} lg={6}>
            <FormControl variant="outlined" color="secondary" fullWidth={true}>
              <InputLabel htmlFor="bankentityaccounts">
                ¿En cuál entidad lo solicitó?
              </InputLabel>
              <Select
                native
                name="bankentityaccounts"
                label="¿En cuál entidad lo solicitó?"
                onChange={handleChange}
                defaultValue={userFinancialData.bankentityaccounts}
                inputRef={register({
                  required: { value: true, message: "Campo obligatorio" },
                })}
              >
                <option aria-label="None" />
                <option value={"1"}>Banco Agrario de Colombia</option>
                <option value={"2"}>Banco AV Villas</option>
                <option value={"3"}>Banco Caja Social</option>
                <option value={"4"}>Banco de Occidente</option>
                <option value={"5"}>Banco de Bogotá</option>
                <option value={"6"}>Bancolombia</option>
                <option value={"7"}>Banco Mundo Mujer</option>
                <option value={"8"}>Banco Popular</option>
                <option value={"9"}>Banco Santander</option>
                <option value={"10"}>Banco BBVA</option>
                <option value={"11"}>Option 11</option>
                <option value={"12"}>Citi Bank</option>
                <option value={"13"}>Colpatria</option>
                <option value={"14"}>Banco Davivienda</option>
                <option value={"15"}>Itau</option>
                <option value={"16"}>Otro</option>
              </Select>
            </FormControl>
            <Typography
              variant="body1"
              display="block"
              color="error"
              gutterBottom
            >
              {errors?.bankentityaccounts?.message}
            </Typography>
          </Grid>
        ) : (
          <br />
        )}
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12}>
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              endIcon={<ExitToAppIcon />}
            >
              Guardar información Financiera
            </Button>
          </Grid>
        </Grid>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={openError}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} variant="filled" severity="error">
            {message}
          </Alert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} variant="filled" severity="success">
            Información Financiera Guardada.
          </Alert>
        </Snackbar>
      </Grid>
    </form>
  );
}
