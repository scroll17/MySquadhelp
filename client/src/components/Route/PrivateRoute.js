import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";

import { MoonLoader } from "react-spinners";

import {getUser} from "../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";

class PrivateRoute extends Component{
    renderPage(){
        const { user, isFetching, requireRole} = this.props;
        if ((!user || user.role !== requireRole) && isFetching === 'answered'){
            return <Redirect to='/notfound' />;
        }
        return( <Route path={this.props.path}  component={this.props.component}/> )
    }

    static renderLoader() {
        return (<MoonLoader size={200} />);
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
}

const mapStateToProps = (state) => ({
    user: state.userReducers.user,
    isFetching: state.userReducers.isFetching,
});
const mapDispatchToProps = (dispatch) => ({
    getUser: () => dispatch(getUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
