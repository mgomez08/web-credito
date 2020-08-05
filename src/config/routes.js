// Layouts
import LayoutBasic from "../layouts/LayoutBasic";
import LayoutUser from "../layouts/LayoutUser";
//Pages
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

//Other
import Error404 from "../pages/Error404";

const routes = [
  {
    path: "/user",
    component: LayoutUser,
    exact: false,
    routes: [
      {
        path: "/user",
        component: Home,
        exact: true,
      },
    ],
  },
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/login",
        component: Login,
        exact: true,
      },
      {
        path: "/register",
        component: Register,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
