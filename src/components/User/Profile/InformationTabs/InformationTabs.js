import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden, CircularProgress, Grid, Typography, SnackbarContent, Button } from "@material-ui/core";
import HorizontalTab from "./HorizontalTab";
import VerticalTab from "./VerticalTab";
import { getAccessTokenApi } from "../../../../api/auth";
import {
  savePersonalInfoApi,
  getPersonalInfoApi,
  saveFinancialInfoApi,
  getFinancialInfoApi,
  saveFormProgressApi,
} from "../../../../api/user";
import "./InformationTabs.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    width: "auto",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  snack: {
    backgroundColor: '#4CAF50',
    width: "auto",
    marginBottom: '25px',
    maxWidth: '550px',
  }
}));
export default function InformationTabs() {
  const [userFinancialData, setUserFinancialData] = useState(null);
  const [userPersonalData, setUserPersonalData] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      const personalData = await getPersonalInfoApi(getAccessTokenApi());
      const financialData = await getFinancialInfoApi(getAccessTokenApi());
      setUserPersonalData(personalData.userStored[0]);
      setUserFinancialData(financialData.userStored[0]);
    };
    fetchData();
  }, []);

  return userPersonalData ? (
    <Tabs
      userPersonalData={userPersonalData}
      setUserPersonalData={setUserPersonalData}
      userFinancialData={userFinancialData}
      setUserFinancialData={setUserFinancialData}
    />
  ) : (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography
        variant="h4"
        align="center"
        color="secondary"
        style={{ padding: 30 }}
      >
        Cargando su información, por favor espere un momento
      </Typography>
      <CircularProgress
        color="secondary"
        size={100}
        style={{ marginBottom: 200 }}
      />
    </Grid>
  );
}
function Tabs(props) {
  const {
    userPersonalData,
    setUserPersonalData,
    userFinancialData,
    setUserFinancialData,
  } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(0);

  var totalcolumns = {
    total: 32,
    difference: 3,
  };
  const action = (<Button variant="contained" color="secondary" size="small">
  Calcular Scoring
</Button>);
  const validcreditinstitution = () => {
    if (userFinancialData?.havecredits == null) {
      return false;
    } else if (userFinancialData.havecredits === "Si") {
      totalcolumns = {
        total: totalcolumns.total + 2,
        difference: totalcolumns.difference - 2,
      };
      return true;
    } else if (userFinancialData.havecredits === "No") {
      totalcolumns = {
        total: totalcolumns.total - 2 < 33 ? 33 : totalcolumns.total - 2,
        difference: totalcolumns.difference,
      };
      return false;
    }
  };
  const validsavingsaccounts = () => {
    if (userFinancialData?.havesavingsaccount == null) {
      return false;
    } else if (userFinancialData.havesavingsaccount === "Si") {
      totalcolumns = {
        total: totalcolumns.total + 1,
        difference: totalcolumns.difference - 1,
      };
      return true;
    } else if (userFinancialData.havesavingsaccount === "No") {
      totalcolumns = {
        total: totalcolumns.total - 1 < 33 ? 33 : totalcolumns.total - 1,
        difference: totalcolumns.difference,
      };
      return false;
    }
  };
  validcreditinstitution();
  validsavingsaccounts();

  const onSubmitFinancial = async (data, e) => {
    setUserFinancialData({
      ...userFinancialData,
      data,
    });

    if (userFinancialData.havecredits === "No") {
      userFinancialData.amountcreditacquired = null;
      userFinancialData.bankentity = null;
    }
    if (userFinancialData.havesavingsaccount === "No") {
      userFinancialData.bankentityaccounts = null;
    }

    const result = await saveFinancialInfoApi(
      userFinancialData,
      getAccessTokenApi()
    );
    if (result.message) {
      setMessage(result.message);
      setOpenError(true);
    } else {
      await saveFormProgressApi({progress},getAccessTokenApi());
      setOpen(true);
    }
    window.scroll(0, 0);
  };
  const onSubmitPersonal = async (data, e) => {
    e.preventDefault();
    setUserPersonalData({
      ...userPersonalData,
      data,
    });
    const result = await savePersonalInfoApi(
      userPersonalData,
      getAccessTokenApi()
    );
    if (result.message) {
      setMessage(result.message);
      setOpenError(true);
    } else {
      await saveFormProgressApi({progress},getAccessTokenApi());
      setOpen(true);
    }
    window.scroll(0, 0);
  };
  return (
    <div className={classes.root}>
    { progress === 100 && 
    (<SnackbarContent className={classes.snack} message="Completaste tu información, haz click en el botón para calcular tu puntaje." action={action}/>) }
      <Hidden mdUp>
        <HorizontalTab
          userPersonalData={userPersonalData}
          setUserPersonalData={setUserPersonalData}
          userFinancialData={userFinancialData}
          setUserFinancialData={setUserFinancialData}
          onSubmitPersonal={onSubmitPersonal}
          onSubmitFinancial={onSubmitFinancial}
          progress={progress}
          setProgress={setProgress}
          open={open}
          setOpen={setOpen}
          openError={openError}
          setOpenError={setOpenError}
          message={message}
          totalcolumns={totalcolumns}
        />
      </Hidden>
      <Hidden smDown>
        <VerticalTab
          userPersonalData={userPersonalData}
          setUserPersonalData={setUserPersonalData}
          userFinancialData={userFinancialData}
          setUserFinancialData={setUserFinancialData}
          onSubmitPersonal={onSubmitPersonal}
          onSubmitFinancial={onSubmitFinancial}
          progress={progress}
          setProgress={setProgress}
          open={open}
          setOpen={setOpen}
          openError={openError}
          setOpenError={setOpenError}
          message={message}
          totalcolumns={totalcolumns}
        />
      </Hidden>
    </div>
  );
}
