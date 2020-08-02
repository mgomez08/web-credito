import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import InfoIcon from "@material-ui/icons/Info";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import "./ListMenu.scss";
export default function ListMenu() {
  return (
    <div className="list-menu">
      <List component="nav" aria-label="main mailbox folders">
        <Link to="/menu1">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Menú 1" />
          </ListItem>
        </Link>
        <Link to="/menu2">
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Menú 2" />
          </ListItem>
        </Link>
        <Link to="/menu3">
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Menú 3" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <Link to="/login">
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Iniciar Sesión" />
          </ListItem>
        </Link>
        <Link to="/register">
          <ListItem button>
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
