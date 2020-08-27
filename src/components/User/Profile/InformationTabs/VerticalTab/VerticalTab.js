import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, LinearProgress, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./VerticalTab.scss";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PersonalForm from "../../PersonalForm";
import FinancialForm from "../../FinancialForm";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

function LinearProgressWithLabel(props) {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center" className={classes.progressForm}>
      <Box width="100%" mr={1}>
        <LinearProgress
          className={classes.bar}
          color="secondary"
          variant="determinate"
          {...props}
        />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "auto",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    overflow: "visible",
  },
  progressForm: {
    paddingLeft: "30px",
    paddingRight: "24px",
    paddingBottom: "15px",
  },
  bar: {
    height: "12px",
    borderRadius: "5px",
  },
}));
export default function VerticalTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab icon={<AccountCircleIcon />} label="Personal" {...a11yProps(0)} />
        <Tab
          icon={<MonetizationOnIcon />}
          label="Financiera"
          {...a11yProps(1)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <LinearProgressWithLabel value={progress} />
        <PersonalForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LinearProgressWithLabel value={progress} />
        <FinancialForm />
      </TabPanel>
    </div>
  );
}
