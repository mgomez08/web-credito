import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ContentPassword from "../../components/User/ChangePassword/ContentPassword";

export default function ChangePassword() {
  const useStyles = makeStyles((theme) => ({
    content: {
      [theme.breakpoints.up("md")]: {
        alignItems: "flex-start",
      },
      [theme.breakpoints.down("sm")]: {
        alignItems: "center",
      },
    },
  }));
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center" className="profile">
      <Grid item xs={1} md={1} />
      <Grid item xs={10} md={10}>
        <Typography color="initial" align="center" variant="h2">
          Cambie su contraseña
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
          className={classes.content}
        >
          <ContentPassword />
        </Grid>
      </Grid>
      <Grid item xs={1} md={1} />
    </Grid>
  );
}
