import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { getAccessTokenApi } from "../../api/auth";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import InformationTabs from "../../components/User/Profile/InformationTabs";
import "./Profile.scss";

export default function Profile() {
  //   if (!getAccessTokenApi()) {
  //     return <Redirect to="/login" />;
  //   }

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
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="profile"
      >
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Typography color="initial" variant="h2" align="center">
            Edita tu información
          </Typography>
          <Grid
            container
            direction="column"
            justify="center"
            className={classes.content}
          >
            <Grid item>
              <InformationTabs />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
}
