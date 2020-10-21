import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden, CircularProgress, Grid, Typography } from "@material-ui/core";
import HorizontalTab from "./HorizontalTab";
import VerticalTab from "./VerticalTab";
import { getAccessTokenApi } from "../../../../api/auth";
import {
  savePersonalInfoApi,
  getPersonalInfoApi,
  saveFinancialInfoApi,
  getFinancialInfoApi,
} from "../../../../api/user";
import "./InformationTabs.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "auto",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
}));
export default function InformationTabs() {
  const [userFinancialData, setUserFinancialData] = useState(null);
  const [userPersonalData, setUserPersonalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const personalData = await getPersonalInfoApi(getAccessTokenApi());
      setUserPersonalData(personalData.userStored[0]);
      const financialData = await getFinancialInfoApi(getAccessTokenApi());
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

  const validcreditinstitution = () => {
    if (userFinancialData?.havecredits == null) {
      return false;
    } else if (userFinancialData.havecredits === "Si") {
      return true;
    } else {
      return false;
    }
  };
  const validsavingsaccounts = () => {
    if (userFinancialData?.havesavingsaccount == null) {
      return false;
    } else if (userFinancialData.havesavingsaccount === "Si") {
      return true;
    } else {
      return false;
    }
  };
  var totalcolumns = validcreditinstitution()
    ? {
        total: 31,
        difference: 0,
      }
    : {
        total: 33,
        difference: 2,
      };
  totalcolumns = validsavingsaccounts()
    ? {
        total: totalcolumns.total + 1,
        difference: totalcolumns.difference,
      }
    : {
        total: totalcolumns.total + 1,
        difference: totalcolumns.difference + 1,
      };
  const onSubmitFinancial = async (data, e) => {
    e.preventDefault();
    setUserFinancialData({
      ...userFinancialData,
      data,
    });
    const result = await saveFinancialInfoApi(
      userFinancialData,
      getAccessTokenApi()
    );
    if (result.message) {
      setMessage(result.message);
      setOpenError(true);
    } else {
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
      setOpen(true);
    }
    window.scroll(0, 0);
  };
  return (
    <div className={classes.root}>
      <Hidden mdUp>
        <HorizontalTab
          userPersonalData={userPersonalData}
          setUserPersonalData={setUserPersonalData}
          userFinancialData={userFinancialData}
          setUserFinancialData={setUserFinancialData}
          onSubmitPersonal={onSubmitPersonal}
          onSubmitFinancial={onSubmitFinancial}
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
