import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Router } from 'react-router'

import MainPages from './pages/MainPages/MainPages'
import LoginPages from './pages/LoginPages/LoginPages'
import NotFoundPages from "./pages/NotFoundPages/NotFoundPages";

import history from "./boot/browserHistory";

import LoggedInMainPage from './components/Hoc/loggedInMainPage'//TODO

import AdminListPage from './pages/AdminListPage/AdminListPage'

import {getUser} from "./actions/actionCreator";
import connect from "react-redux/es/connect/connect";

class App extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        if(!this.props.user){
            this.props.getUser();
        }
    }

    IfUserIsLoggedIn(component){
        if(this.props.user){
            return () => <Redirect to='/'/>
        }
        return component
    }

    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route exact path={"/"}  component={MainPages}/>
                    <Route path={"/login"} component={this.IfUserIsLoggedIn(LoginPages)}/>
                    <Route path={"/adminpanel"}  component={AdminListPage}/>
                    <Route component={ NotFoundPages } />
                </Switch>
            </Router>
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
