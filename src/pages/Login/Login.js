import React, {useState, useEffect} from "react";
import FormLogin from "../../components/Web/FormLogin";
import { Grid, Typography, Snackbar } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { getAccessTokenApi } from "../../api/auth";
import Alert from "@material-ui/lab/Alert";
import "./Login.scss";


export default function Login(props) {
  const sinceRegister = props.location.state;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    sinceRegister ? setOpen(true) : setOpen(false);
  }, [sinceRegister])
  
  if (getAccessTokenApi()) {
    return <Redirect to="/user" />;
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="form-title"
      >
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Typography align="center" color="initial" variant="h2">
                Inicia Sesión en MiCrédito
              </Typography>
            </Grid>
            <Grid item>
              <FormLogin sinceRegister={sinceRegister}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} variant="filled" severity="success">
            Registro correcto, inicie sesión
          </Alert>
        </Snackbar>
      </Grid>

    </>
  );
}
