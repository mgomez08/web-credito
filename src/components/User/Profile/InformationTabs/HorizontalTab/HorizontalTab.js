import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Tabs, Tab } from "@material-ui/core";
import PersonalForm from "../../PersonalForm";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function HorizontalTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Personal" {...a11yProps(0)} />
        <Tab label="Financiera" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <PersonalForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </>
  );
}
