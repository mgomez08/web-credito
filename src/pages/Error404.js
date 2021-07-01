import React from "react";
import { Link } from "react-router-dom";

import { Grid, Typography, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import img404 from "../assets/img/jpg/404img.jpg"

export default function Error404() {
  const useStyles = makeStyles((theme) => ({
    content: {
      [theme.breakpoints.up("md")]: {
        alignItems: "flex-start",
      },
      [theme.breakpoints.down("sm")]: {
        alignItems: "center",
      },
    },
    center:{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    imgSize:{
      width: "350px",
      height: "350px",
    },
    NoDecoration:{
      textDecoration: "none",
    }
  }));
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={1} md={1} />
      <Grid item xs={10} md={10} className={classes.center}>
        <Hidden smDown>
            <Typography
              color="initial"
              align="center"
              variant="h2"
              style={{ paddingBottom: 20 }}
            >
              ¡Oops parece accedió a una página inexistente!
            </Typography>
          </Hidden>
          <Hidden mdUp>
            <Typography
              color="initial"
              align="center"
              variant="h3"
              style={{ paddingBottom: 20 }}
              className="Titulo"
            >
              ¡Oops parece accedió a una página inexistente!
            </Typography>
          </Hidden>
        <img src={img404} alt="Imagen alusiva al error 404" className={classes.imgSize}/>
        <Grid
          container
          direction="row"
          justify="center"
          className={classes.content}
        >
          <Typography color="initial" align="center" variant="h4">
            Regrese al inicio haciendo click <Link className={classes.NoDecoration} to="/">Aquí</Link>
        </Typography>
        </Grid>
      </Grid>
      <Grid item xs={1} md={1} />
    </Grid>
  );
}
