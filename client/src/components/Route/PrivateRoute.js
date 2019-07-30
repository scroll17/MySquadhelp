import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Router } from 'react-router'

import {getUser} from "./actions/actionCreator";
import connect from "react-redux/es/connect/connect";




class UserLoader extends Component{
    constructor(props){
        super(props)
    }

/*
    componentDidMount() {
        if(!this.props.user){
            this.props.getUser();
        }
    }
*/

    IfUserIsLoggedIn(component){
        if(this.props.user){
            return () => <Redirect to='/'/>
        }
        return component
    }

    render(){
        return(
            <>
                {this.props.children}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.userReducers.user,
});
const mapDispatchToProps = (dispatch) => ({
    getUser: () => dispatch(getUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserLoader);
