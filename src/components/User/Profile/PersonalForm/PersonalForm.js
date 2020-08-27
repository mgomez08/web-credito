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
import moment from "moment";
import MomentUtils from "@date-io/moment";
import Alert from "@material-ui/lab/Alert";
import "./PersonalForm.scss";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useForm } from "react-hook-form";

export default function PersonalForm() {
  const { register, errors, handleSubmit } = useForm();
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
  const handleChange = (e) => {
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
  };
  const onSubmit = (data, e) => {
    console.log(data);
    setInputs({
      ...inputs,
      data,
    });
    e.target.reset();
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
          <span> {errors?.names?.message}</span>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Apellidos"
            variant="outlined"
            color="secondary"
            fullWidth
            name="lastname"
            onChange={handleChange}
            value={inputs.lastname}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
              pattern: {
                value: /^([a-z ñáéíóú])+$/i,
                message: "Solo puede ingresar letras en su apellido",
              },
            })}
          />
          <span> {errors?.lastname?.message}</span>
        </Grid>
        <Grid item xs={12} lg={6}>
          <KeyboardDatePicker
            fullWidth={true}
            color="secondary"
            inputVariant="outlined"
            margin="normal"
            name="datebirth"
            autoOk={true}
            label="Fecha de nacimiento"
            format="DD/MM/yyyy"
            maxDate={new Date()}
            value={inputs.datebirth}
            onChange={handleChange}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
            })}
          />
          <span>{errors?.datebirth?.message}</span>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="departbirth">
              Departamento de Nacimiento
            </InputLabel>
            <Select
              native
              name="departbirth"
              value={inputs.departbirth}
              onChange={handleChange}
              label="Departamento de Nacimiento"
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              <option value={"Tolima"}>Tolima</option>
              <option value={"Cundinamarca"}>Cundinamarca</option>
            </Select>
          </FormControl>
          <span>{errors?.departbirth?.message}</span>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="city-birth">Cuidad de nacimiento</InputLabel>
            <Select
              native
              name="citybirth"
              value={inputs.citybirth}
              onChange={handleChange}
              label="Cuidad de Nacimiento"
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              <option value={"Espinal"}>Espinal</option>
              <option value={"Girardot"}>Girardot</option>
            </Select>
          </FormControl>
          <span>{errors?.citybirth?.message}</span>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="type-doc">Tipo de Documento</InputLabel>
            <Select
              native
              name="typedoc"
              value={inputs.typedoc}
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
          <span>{errors?.typedoc?.message}</span>
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
            value={inputs.ndoc}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
            })}
          />
          <span>{errors?.ndoc?.message}</span>
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
            value={inputs.age}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
            })}
          />
          <span>{errors?.age?.message}</span>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="educational-level">
              Nivel de Estudio
            </InputLabel>
            <Select
              native
              name="educationallevel"
              value={inputs.educationallevel}
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
          <span>{errors?.educationallevel?.message}</span>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Profesión"
            variant="outlined"
            color="secondary"
            fullWidth
            name="profession"
            onChange={handleChange}
            value={inputs.profession}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
            })}
          />
          <span>{errors?.profession?.message}</span>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Ocupación"
            variant="outlined"
            color="secondary"
            fullWidth
            name="occupation"
            onChange={handleChange}
            value={inputs.occupation}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
            })}
          />
          <span>{errors?.occupation?.message}</span>
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
            value={inputs.numpersonsfamilynucleus}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
            })}
          />
          <span>{errors?.numpersonsfamilynucleus?.message}</span>
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
            value={inputs.numpersonsdependents}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
            })}
          />
          <span>{errors?.numpersonsdependents?.message}</span>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="type-housing">Tipo de Vivienda</InputLabel>
            <Select
              native
              name="typehousing"
              value={inputs.typehousing}
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
          <span>{errors?.typehousing?.message}</span>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="depart-residence">
              Departamento de residencia
            </InputLabel>
            <Select
              native
              name="departresidence"
              value={inputs.departresidence}
              onChange={handleChange}
              label="Departamento de Residencia"
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              <option value={"Tolima"}>Tolima</option>
              <option value={"Cundinamarca"}>Cundinamarca</option>
            </Select>
          </FormControl>
          <span>{errors?.departresidence?.message}</span>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl variant="outlined" color="secondary" fullWidth={true}>
            <InputLabel htmlFor="city-residence">
              Cuidad de residencia
            </InputLabel>
            <Select
              native
              name="cityresidence"
              value={inputs.cityresidence}
              onChange={handleChange}
              label="Cuidad de Residencia"
              inputRef={register({
                required: { value: true, message: "Campo obligatorio" },
              })}
            >
              <option aria-label="None" />
              <option value={"Espinal"}>Espinal</option>
              <option value={"Girardot"}>Girardot</option>
            </Select>
          </FormControl>
          <span>{errors?.cityresidence?.message}</span>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            label="Dirección de Residencia"
            variant="outlined"
            color="secondary"
            fullWidth
            name="homeaddress"
            onChange={handleChange}
            value={inputs.homeaddress}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
            })}
          />
          <span>{errors?.homeaddress?.message}</span>
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
            value={inputs.yearsresidence}
            inputRef={register({
              required: { value: true, message: "Campo obligatorio" },
            })}
          />
          <span>{errors?.yearsresidence?.message}</span>
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
      </Grid>
    </form>
  );
}
