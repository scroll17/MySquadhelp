import React  from 'react';
import connect from "react-redux/es/connect/connect";
import style from "./LoginPages.module.sass";

import { loginUser } from "../../actions/actionCreator";

import HeaderLoginAndSignup from "../../components/HeaderLoginAndSignup/HeaderLoginAndSignup";
import LoginForm from "../../components/LoginForm/LoginForm";
import {Redirect} from "react-router-dom";

class LoginPage extends React.Component {
    constructor(props){
        super(props)
    }

    onLoginSubmit = values => {this.props.onLoginSubmit(values)};

    render(){
        return (
            <main className={style.UserSignupFlow}>
                <div className={style.Container}>
                    <HeaderLoginAndSignup>Signup</HeaderLoginAndSignup>
                    <LoginForm onSubmit={this.onLoginSubmit}/>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.userReducers.user
});

const mapDispatchToProps = dispatch => ({
    onLoginSubmit: user => dispatch(loginUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
