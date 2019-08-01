import React, { Component } from 'react';

import { getUser } from "../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";

class UserLoader extends Component{
    componentDidMount() {
        if (!this.props.user && localStorage.getItem("accessToken")) {
            return this.props.getUser();
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
});
export default connect(mapStateToProps, mapDispatchToProps)(UserLoader);
