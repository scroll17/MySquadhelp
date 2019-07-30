import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";

import {getUser} from "../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";




class UserLoader extends Component{
    constructor(props){
        super(props)
    }
    render(){
        if (!this.props.user){
            return <Redirect to='/notfound' />;
            if(this.props.user.role !== 2 ) return <Redirect to='/notfound' />;
        }
        return(
            <Route path={this.props.path}  component={this.props.component}/>
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
