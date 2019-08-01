import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Router } from 'react-router'



import { getUser, createStoreResponse } from "../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";

class UserLoader extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        if(!this.props.user && localStorage.getItem("accessToken")) {
            return this.props.getUser();
        }else {
            return this.props.createStoreResponse()
        }
    }

    render(){
        return(
            <> {this.props.children} </>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.userReducers.user,
});
const mapDispatchToProps = (dispatch) => ({
    getUser: () => dispatch(getUser()),
    createStoreResponse: () => dispatch(createStoreResponse()),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserLoader);
