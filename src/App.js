import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/routes";
import "./App.scss";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themeConfig";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import "moment/locale/es";
import AuthProvider from "./providers/AuthProvider";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils} locale="es">
         <AppRouter />
          {/* <Router>
            <Switch>
              {routes.map((route, index) => (
                <RouteWithSubRoutes key={index} {...route} />
              ))}
            </Switch>
          </Router> */}
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component routes={route.routes} {...props} />}
    />
  );
}
export default App;
