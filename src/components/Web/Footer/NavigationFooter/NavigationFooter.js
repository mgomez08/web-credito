import React from "react";
import "./NavigationFooter.scss";
import { Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import ScoreIcon from "@material-ui/icons/Score";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import useAuth from "../../../../hooks/useAuth";

export default function NavigationFooter() {
  const { user } = useAuth();
  return (
    <Grid className="navigation" container>
      <Grid item xs={12}>
        <Typography variant="h4">Navegación</Typography>
      </Grid>
      <Grid item xs={6} sm={6} md={6}>
        <RenderListLeft user={user}/>
      </Grid>
      <Grid item xs={6} sm={6} md={6}>
        <RenderListRight user={user}/>
      </Grid>
    </Grid>
  );
}

function RenderListLeft({user}) {
  return (
    <List component="ul">
      {user ? (
        <>
          <ListItem>
            <Link to="/">
              <HomeIcon />
              Inicio
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/calcular-scoring">
              <ScoreIcon />
              Calcular Scoring
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/changepassword">
              <VpnKeyIcon />
              Cambiar Contraseña
            </Link>
          </ListItem>
        </>
      ) : (
        <>
          <ListItem>
            <Link to="/login">
              <PersonIcon />
              Iniciar Sesión
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/register">
              <PersonAddIcon />
              Registrarse
            </Link>
          </ListItem>
        </>
      )}
    </List>
  );
}
function RenderListRight({user}) {
  return (
    <List component="ul">
      {user ? (
        <>
         <ListItem>
            <Link to="/perfil">
              <PersonPinIcon />
              Perfil
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/banks">
              <AccountBalanceIcon />
              Bancos
            </Link>
          </ListItem>
        </>
      ) : (
        <>
          <ListItem>
            <Link to="/">
              <HomeIcon />
              Inicio
            </Link>
          </ListItem>
        </>
      )}
    </List>
  );
}
