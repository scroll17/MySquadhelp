import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Router } from 'react-router'

import MainPages from './pages/MainPages/MainPages'
import LoginPages from './pages/LoginPages/LoginPages'
import SignupPage from './pages/SignupPage/SignupPage';
import NotFoundPages from "./pages/NotFoundPages/NotFoundPages";

import history from "./boot/browserHistory";

import LoggedInMainPage from './components/Hoc/loggedInMainPage'//TODO

import AdminListPage from './pages/AdminListPage/AdminListPage'

import {getUser} from "./actions/actionCreator";
import connect from "react-redux/es/connect/connect";

import UserLoader from './components/Route/UserLoader';
import PrivateRoute from './components/Route/PrivateRoute';

class App extends Component{
    constructor(props){
        super(props)
    }


    IfUserIsLoggedIn(component){
        if(this.props.user){
            return () => <Redirect to='/'/>
        }
        return component
    }

    render(){
        return(
            <UserLoader>
                <Router history={history}>
                    <Switch>
                        <Route exact path={"/"}  component={MainPages}/>
                        <Route path={"/login"} component={this.IfUserIsLoggedIn(LoginPages)}/>
                        <Route path={"/signup"} component={this.IfUserIsLoggedIn(SignupPage)}/>
{/*                        <Route path={"/adminpanel"}  component={LoggedInMainPage(AdminListPage)}/>*/}
                        <PrivateRoute requireRole={2} path={"/adminpanel"}  component={AdminListPage} />
                        <Route component={ NotFoundPages } />
                    </Switch>
                </Router>
            </UserLoader>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.userReducers.user,
});
const mapDispatchToProps = (dispatch) => ({
    getUser: () => dispatch(getUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
