import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";

import Loader from 'react-loader-spinner';

import {getUser} from "../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";


class PrivateRoute extends Component{
    constructor(props){
        super(props)
    }

    renderPage(){
        if (!this.props.user){
            return <Redirect to='/notfound' />;
            if(this.props.user.role !== 2 ) return <Redirect to='/notfound' />;
        }
        return(
            <Route path={this.props.path}  component={this.props.component}/>
        )
    }

    static renderLoader() {
                console.log('renderLoader');
        return (<Loader
            type="ThreeDots"
            color="#000000"
            height="100px"
            width="100px"
        />);
    }

    render(){
            console.log('isFetching',this.props.isFetching);
        return(
            <>
                {!this.props.isFetching ?
                    PrivateRoute.renderLoader()
                    :
                    this.renderPage()
                }
            </>
        )
    }

    componentDidMount() {
/*        if (!this.props.user){
            return <Redirect to='/notfound' />;
            if(this.props.user.role !== 2 ) return <Redirect to='/notfound' />;
        }*/
    }
}

const mapStateToProps = (state) => ({
    user: state.userReducers.user,
    isFetching: state.userReducers.isFetching,
});
const mapDispatchToProps = (dispatch) => ({
    getUser: () => dispatch(getUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
