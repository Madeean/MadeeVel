import {Switch, Route} from 'react-router-dom'

import Login from '../pages/admin/Login'

import PrivateRoute from './PrivateRoutes'

import Dashboard from '../pages/admin/dashboard/Index'

function Routes(){
    return (
        <Switch>

            {/* route "/adminlogin" */}
            <Route exact path="/admin/login">
                <Login /> 
            </Route>

           {/* private route "/admin/dashboard" */}
           <PrivateRoute exact path="/admin/dashboard">
                <Dashboard /> 
            </PrivateRoute>
            
        </Switch>
    )
}
export default Routes