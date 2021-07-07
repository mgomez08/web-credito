import React from "react";
import "./ContactFooter.scss";
import { makeStyles } from "@material-ui/core";
import { Typography, Grid } from "@material-ui/core";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
  links: {
    paddingLeft: '5px',
  }
}))
export default function ContactFooter() {
  const classes = useStyles();
  return (
    <Grid className="contact-footer" container>
      <Grid item xs={12}>
        <Typography variant="h4">Contáctenos</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <RenderList classes={classes}/>
      </Grid>
    </Grid>
  );
}
function RenderList({classes}) {
  return (
    <List component="ul">
      <ListItem>
        <span className={classes.links}>
          <PhoneIcon />
          01 8000 2412
        </span>
      </ListItem>
      <ListItem>
        <span className={classes.links}>
          <ContactPhoneIcon />
          3117002122 - 3201042122
        </span>
      </ListItem>
      <ListItem>
        <span className={classes.links}>
          <EmailIcon />
          servicioalcliente@micredito.com
        </span>
      </ListItem>
    </List>
  );
}
