import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import "./ListMenu.scss";

export default function ListMenu(props) {

  return (
    <div className="list-menu">
      
      <List component="nav" aria-label="secondary mailbox folders">
        <Link to="/login">
          <ListItem button onClick={props.handleDrawerClose}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Iniciar Sesión" />
          </ListItem>
        </Link>
        <Link to="/register">
          <ListItem button onClick={props.handleDrawerClose}>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Registrarse" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
