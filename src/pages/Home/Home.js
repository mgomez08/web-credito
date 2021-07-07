import React from "react";
import { Typography, Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Toolimg from "../../assets/img/png/tool.png"
import Calculateimg from "../../assets/img/png/calculate.png"
import Bankimg from "../../assets/img/png/bank.png"

export default function Home() {
  const useStyles = makeStyles((theme) => ({
    content: {
      [theme.breakpoints.up("md")]: {
        alignItems: "flex-start",
      },
      [theme.breakpoints.down("sm")]: {
        alignItems: "center",
      },
    },
    MuiInputLabelRoot: {
      marginRight: theme.spacing(2),
    },
    containerImg:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    toolSize: { 
      width: '400px',
      height: '180px',
      minWidth: '250px',
      minHeight: '150px',
    },
    calculateSize: { 
      width: '350px',
      height: '200px',
    },
    bankSize: { 
      width: '220px',
      height: '220px',
    }
  }));
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={1} md={1} />
        <Grid item xs={10} md={10}>
          <Hidden smDown>
            <Typography
              color="initial"
              align="center"
              variant="h1"
              style={{ paddingBottom: 20 }}
            >
              ¡Bienvenido a MiCrédito!
            </Typography>
          </Hidden>
          <Hidden mdUp>
            <Typography
              color="initial"
              align="center"
              variant="h2"
              style={{ paddingBottom: 20 }}
              className="Titulo"
            >
              ¡Bienvenido a MiCrédito!
            </Typography>
          </Hidden>
          <Grid
            container
            direction="row"
            justify="center"
            className={classes.content}
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                color="secondary"
                style={{ paddingBottom: 15 }}
              >
                ¿Qué es MiCrédito?
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                align="justify"
                style={{ paddingBottom: 15 }}
              >
               MiCrédito es la plataforma diseñada para calcular el puntaje scoring, que ayuda a determinar la probabilidad de aprobación de un crédito basado en información de carácter personal y financiera que las entidades bancarias tienen en cuenta para el conceder sus productos financieros.
              </Typography>
            </Grid>
            <Grid className={classes.containerImg} item xs={12} md={6}>
                <img className={classes.toolSize} src={Toolimg} alt=""  />
            </Grid>
            <Hidden smDown>
            <Grid className={classes.containerImg} item xs={12} md={6}>
                <img className={classes.calculateSize} src={Calculateimg} alt=""  />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                color="secondary"
                style={{ paddingBottom: 15 }}
              >
                ¿Cómo lo hacemos?
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                align="justify"
                style={{ paddingBottom: 15 }}
              >
                Dicho puntaje es asignado de acuerdo a datos de cada persona como los ingresos/egresos mensuales, valor de sus activos totales, si tiene o no algún credito actualmente y sus días de mora. El sistema de información recopila y almacena la información en una base de datos, luego la procesa a través de cálculos necesarios que permiten conocer el valor del scoring.
              </Typography>
            </Grid>
            </Hidden>
            <Hidden mdUp>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                color="secondary"
                style={{ paddingBottom: 15 }}
              >
                ¿Cómo lo hacemos?
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                align="justify"
                style={{ paddingBottom: 15 }}
              >
               Dicho puntaje es asignado de acuerdo a datos de cada persona como los ingresos/egresos mensuales, valor de sus activos totales, si tiene o no algún credito actualmente y sus días de mora. El sistema de información recopila y almacena la información en una base de datos, luego la procesa a través de cálculos necesarios que permiten conocer el valor del scoring.
              </Typography>
            </Grid>
            <Grid className={classes.containerImg} item xs={12} md={6}>
                <img className={classes.calculateSize} src={Calculateimg} alt=""  />
            </Grid>
            </Hidden>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                color="secondary"
                style={{ paddingBottom: 15 }}
              >
                ¿Qué es el Scoring?
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                align="justify"
                style={{ paddingBottom: 15 }}
              >
                El scoring es un puntaje a través del cual las entidades financieras determinan el riesgo de otorgarle o no productos financieros a un cliente.
              </Typography>
            </Grid>
            <Grid className={classes.containerImg} item xs={12} md={6}>
                <img className={classes.bankSize} src={Bankimg} alt=""  />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} md={1} />
      </Grid>
    </div>
  );
}
