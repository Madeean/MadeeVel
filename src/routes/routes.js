import {Switch, Route} from 'react-router-dom'

import Login from '../pages/admin/Login'

import PrivateRoute from './PrivateRoutes'

import Dashboard from '../pages/admin/dashboard/Index'

import CategoriesIndex from '../pages/admin/categories/Index'
import CategoryCreate from '../pages/admin/categories/Create'
import CategoryEdit from '../pages/admin/categories/Edit'

import PlacesIndex from '../pages/admin/places/Index'
import PlaceCreate from '../pages/admin/places/Create'
import PlaceEdit from '../pages/admin/places/Edit'

import SlidersIndex from '../pages/admin/sliders/Index'
import SliderCreate from '../pages/admin/sliders/Create'

import UsersIndex from '../pages/admin/users/Index'
import UserCreate from '../pages/admin/users/Create'
import UserEdit from '../pages/admin/users/Edit'

// =====================================================================================================

import Home from '../pages/web/home/Index'

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


           <PrivateRoute exact path="/admin/places">
                <PlacesIndex /> 
            </PrivateRoute>
           <PrivateRoute exact path="/admin/places/create">
                <PlaceCreate /> 
            </PrivateRoute>
           <PrivateRoute exact path="/admin/places/edit/:id">
                <PlaceEdit /> 
            </PrivateRoute>
            
           <PrivateRoute exact path="/admin/sliders">
                <SlidersIndex /> 
            </PrivateRoute>
           <PrivateRoute exact path="/admin/sliders/create">
                <SliderCreate /> 
            </PrivateRoute>

           <PrivateRoute exact path="/admin/users">
                <UsersIndex /> 
            </PrivateRoute>
           <PrivateRoute exact path="/admin/users/create">
                <UserCreate /> 
            </PrivateRoute>
           <PrivateRoute exact path="/admin/users/edit/:id">
                <UserEdit /> 
            </PrivateRoute>



            <Route exact path="/">
                <Home /> 
            </Route>

            
        </Switch>
    )
}
export default Routes