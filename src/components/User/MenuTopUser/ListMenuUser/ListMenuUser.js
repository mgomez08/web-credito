import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import ScoreIcon from "@material-ui/icons/Score";
import PersonIcon from "@material-ui/icons/Person";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { logout } from "../../../../api/auth";
import "./ListMenuUser.scss";

export default function ListMenuUser(props) {
  const logoutUser = () => {
    logout();
    window.location.reload();
  };
  return (
    <div className="list-menu">
      <List component="nav" aria-label="main mailbox folders">
        <Link to="/perfil">
          <ListItem button onClick={props.handleDrawerClose}>
            <ListItemIcon>
              <PersonPinIcon />
            </ListItemIcon>
            <ListItemText primary="Perfil" />
          </ListItem>
        </Link>
        <Link to="/calcular-scoring">
          <ListItem button onClick={props.handleDrawerClose}>
            <ListItemIcon>
              <ScoreIcon />
            </ListItemIcon>
            <ListItemText primary="Scoring" />
          </ListItem>
        </Link>
        <Link to="/banks">
          <ListItem button onClick={props.handleDrawerClose}>
            <ListItemIcon>
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary="Bancos" />
          </ListItem>
        </Link>
        <Link to="/changepassword">
          <ListItem button onClick={props.handleDrawerClose}>
            <ListItemIcon>
              <VpnKeyIcon />
            </ListItemIcon>
            <ListItemText primary="Cambiar Contraseña" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <Link to="/login">
          <ListItem button onClick={logoutUser}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Cerrar sesión" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
