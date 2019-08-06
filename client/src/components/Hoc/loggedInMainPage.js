import React, { Component } from 'react';
import {getUser} from "../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";

export default function(WrappedComponent) {
    class LoggedInMainPage extends Component {
        constructor(props) {
            super(props);

        }
        componentDidMount() {
            if(!this.props.user)
            this.props.getUser();
        }

        render() {
            return <WrappedComponent/>
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
