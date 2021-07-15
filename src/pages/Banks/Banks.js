import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ContentBanks } from "../../components/User/Banks/ContentBanks";

export default function Banks() {
  const useStyles = makeStyles((theme) => ({
    content: {
      [theme.breakpoints.up("md")]: {
        alignItems: "flex-start",
      },
      [theme.breakpoints.down("sm")]: {
        alignItems: "center",
      },
    },
    title: { 
      paddingBottom: theme.spacing(2),
    }
  }));
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center" >
      <Grid item xs={1} md={1} />
      <Grid item xs={10} md={10}>
        <Typography color="initial" align="center" variant="h2" className={classes.title}>
          Lista de Bancos
        </Typography>
        <Typography color="initial" align="left" variant="h5" className={classes.title}>
          A continuación encontrará un listado de bancos en los que podrá comparar sus tasas de interés en algunos productos que estos ofrece.
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
          className={classes.content}
        >
          <ContentBanks />
        </Grid>
      </Grid>
      <Grid item xs={1} md={1} />
    </Grid>
  );
}
