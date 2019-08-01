import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";

import { MoonLoader } from "react-spinners";

import {getUser} from "../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";


class PrivateRoute extends Component{
    constructor(props){
        super(props)
    }


    renderPage(){
        console.log('user: ', !this.props.user,' isFetching: ', this.props.isFetching === "answered");

        if (!this.props.user && this.props.isFetching === 'answered'){
            return <Redirect to='/notfound' />;
            if(this.props.user.role !== 2 ) return <Redirect to='/notfound' />;
        }
        return(
            <Route path={this.props.path}  component={this.props.component}/>
        )
    }

    static renderLoader() {
        return (<MoonLoader
                size={200}
            />);
    }

    render(){
        const { isFetching } = this.props;
        return(
            <>
                {isFetching === "requested" ?
                    PrivateRoute.renderLoader()
                    :
                    this.renderPage()
                }
            </>
        )
    }
/*
    componentDidMount() {
        console.log('Update by', this.props.isFetching);
        if(!!this.props.isFetching) return true;
    }*/
/*
    shouldComponentUpdate(nextProps, nextState, nextContext) {

        console.log('shouldComponentUpdate', this.props.isFetching === "requested" && nextProps.isFetching === "answered");


        if(this.props.isFetching === "requested" && nextProps.isFetching === "answered"){ return true }
        else{ return false }
    }*/
}

const mapStateToProps = (state) => ({
    user: state.userReducers.user,
    isFetching: state.userReducers.isFetching,
});
const mapDispatchToProps = (dispatch) => ({
    getUser: () => dispatch(getUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
