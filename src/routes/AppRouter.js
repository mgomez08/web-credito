import React from 'react'
import { useEffect } from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom'

import LayoutBasic from '../layouts/LayoutBasic';
import LayoutUser from '../layouts/LayoutUser';

import Footer from '../components/Web/Footer';

import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';

import Profile from '../pages/Profile/Profile';


import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import useAuth from '../hooks/useAuth';
import { getAccessTokenApi } from '../api/auth';
import Error404 from '../pages/Error404';

export const AppRouter = () => {
    const { user, isLoading } = useAuth();
    // const dispatch = useDispatch();
    // const { checking, uid } = useSelector(state => state.auth)
    // useEffect(() => {
    //     dispatch( startChecking());
    // }, [dispatch])
    if( isLoading ){
        return <h5>Espere...</h5>
    }else{
        return (

            <Router>
                <div>
                {getAccessTokenApi() ? <LayoutUser /> : <LayoutBasic />  }
                    <Switch>
                        <PublicRoute exact
                         path="/" 
                         component={Home} 
                         isLoggedIn={ !!user }                             
                         />
                        <PublicRoute exact
                         path="/login" 
                         component={Login} 
                         isLoggedIn={ !!user }                             
                         />
                        <PublicRoute exact
                         path="/register" 
                         component={Register} 
                         isLoggedIn={ !!user }                             
                         />
                        <PrivateRoute 
                         exact 
                         path="/user" 
                         component={Home} 
                         isLoggedIn={ !!user }      
                        />
                        <PrivateRoute 
                         exact 
                         path="/perfil" 
                         component={Profile} 
                         isLoggedIn={ !!user }      
                        />
                        <PublicRoute
                         component={Error404}                             
                         />
                    </Switch>
                  <Footer />
                </div>
            </Router>
        )
    }
}
