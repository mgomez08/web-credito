import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";
import HorizontalTab from "./HorizontalTab";
import VerticalTab from "./VerticalTab";
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
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [userFinancialData, setUserFinancialData] = useState({
    yearsexperience: "",
    datecurrentjob: null,
    workposition: "",
    typesalary: "",
    typecontract: "",
    monthlysalary: "",
    monthlyexpenditure: "",
  });
  const [userPersonalData, setUserPersonalData] = useState({
    names: "",
    lastname: "",
    datebirth: null,
    departbirth: "",
    citybirth: "",
    typedoc: "",
    ndoc: "",
    tel: "",
    age: "",
    educationallevel: "",
    profession: "",
    occupation: "",
    numpersonsfamilynucleus: "",
    numpersonsdependents: "",
    typehousing: "",
    departresidence: "",
    cityresidence: "",
    homeaddress: "",
    yearsresidence: "",
  });
  const onSubmitFinancial = (data, e) => {
    setUserFinancialData({
      ...userFinancialData,
      data,
    });
    setOpen(true);
  };
  const onSubmitPersonal = (data, e) => {
    setUserPersonalData({
      ...userPersonalData,
      data,
    });
    setOpen(true);
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
        />
      </Hidden>
    </div>
  );
}
