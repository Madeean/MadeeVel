import {Switch, Route} from 'react-router-dom'

import Login from '../pages/admin/Login'

import PrivateRoute from './PrivateRoutes'

import Dashboard from '../pages/admin/dashboard/Index'

import CategoriesIndex from '../pages/admin/categories/Index'
import CategoryCreate from '../pages/admin/categories/Create'
import CategoryEdit from '../pages/admin/categories/Edit'

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

           <PrivateRoute exact path="/admin/categories">
                <CategoriesIndex /> 
            </PrivateRoute>
           <PrivateRoute exact path="/admin/categories/create">
                <CategoryCreate /> 
            </PrivateRoute>
           <PrivateRoute exact path="/admin/categories/edit/:id">
                <CategoryEdit /> 
            </PrivateRoute>
            
        </Switch>
    )
}
export default Routes