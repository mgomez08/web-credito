import React, { useState } from "react";
import { Button, Grid, Typography, SnackbarContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { calculateScoringApi, getFormProgressApi } from "../../../api/user";
import { getAccessTokenApi } from "../../../api/auth";
import { ProgressCircular } from "../../Content/ProgressCircular";

// const action = (
//   <Button color="secondary" size="small">
//     lorem ipsum dolorem
//   </Button>
// );
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  snackbar: {
    backgroundColor: "#F44336",
  },
  button: {
    marginTop: theme.spacing(3),
  },
  scoring: {
    marginTop: theme.spacing(2),
  },
}));

export default function ContentScoring() {
  const [showAlert, setShowAlert] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showCircularProgress, setShowCircularProgress] = useState(false);
  const [showScoring, setShowScoring] = useState(false);
  const [valueScoring, setValueScoring] = useState();

  const verifyFormProgress = async () => {
    setValueScoring("");
    setShowScoring(false);
    setShowButton(false);
    const { progress } = await getFormProgressApi(getAccessTokenApi());
    if (progress !== 100) {
      setShowAlert(true);
      setShowButton(true);
    } else {
      calculateScoring();
    }
  };
  const calculateScoring = async () => {
    setShowCircularProgress(true);
    const result = await calculateScoringApi(getAccessTokenApi());
    if (result) {
      setTimeout(() => {
        setShowCircularProgress(false);
        setValueScoring(result.message);
        setShowScoring(true);
        setShowButton(true);
      }, 1500);
    }
  };

  const classes = useStyles();
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography color="initial" align="justify" variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      {showAlert ? (
        <div className={classes.root}>
          <SnackbarContent
            className={classes.snackbar}
            message={
              "No ha completado toda su información, diríjase hacia el menú Perfil y completela."
            }
          />
        </div>
      ) : (
        ""
      )}
      {showCircularProgress ? (
        <ProgressCircular
          variantMessage="h4"
          message="Calculando su Scoring, esto puede tardar unos segundos"
        />
      ) : (
        ""
      )}
      {showScoring ? (
        <Typography
          color="initial"
          align="justify"
          variant="h5"
          className={classes.scoring}
        >
          {valueScoring}
        </Typography>
      ) : (
        ""
      )}
      {showButton ? (
        <Button
          onClick={verifyFormProgress}
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Calcular Scoring
        </Button>
      ) : (
        ""
      )}
    </Grid>
  );
}
