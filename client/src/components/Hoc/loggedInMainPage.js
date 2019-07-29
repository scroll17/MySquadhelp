import React, { Component } from 'react';
import {getUser} from "../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";

export default function(WrappedComponent) {
    class LoggedInMainPage extends Component {
        constructor(props) {
            super(props);
        }
        checkUserToken = () => {
            if(this.props.user){
                return <WrappedComponent/>
            }else{
                this.props.getUser();
                return <WrappedComponent/>
            }
        };

        render() {
            return this.checkUserToken()
        }
    }

    const mapStateToProps = (state) => ({
        user: state.userReducers.user,
    });
    const mapDispatchToProps = (dispatch) => ({
        getUser: () => dispatch(getUser()),
    });
    return connect(mapStateToProps, mapDispatchToProps)(LoggedInMainPage);
}
