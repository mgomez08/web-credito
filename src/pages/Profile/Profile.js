import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InformationTabs from "../../components/User/Profile/InformationTabs";

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

export default function Profile() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={false} md={1} />
        <Grid item xs={12} md={10}  >
          <Typography color="initial" align="center" variant="h2" className={classes.title}>
            Edita tu información
          </Typography>
          <Grid
            container
            direction="row"
            justify="center"
            className={classes.content}
          >
            <Grid item>
              <InformationTabs />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={false} md={1} />
      </Grid>
    </div>
  );
}
