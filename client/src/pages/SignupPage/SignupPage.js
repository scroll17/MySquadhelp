import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";

import style from "./SignupPage.module.sass";
import HeaderLoginAndSignup from "../../components/HeaderLoginAndSignup/HeaderLoginAndSignup";
import SignupForm from "../../components/SignupForm/SignupForm";

import { loginUser } from "../../actions/actionCreator";



class SignupPage extends Component{
    constructor(props){
        super(props)
    }

    onLoginSubmit = values => {this.props.onLoginSubmit(values)};

    render(){
        return (
            <main className={style.UserSignupFlow}>
                <div className={style.Container}>
                    <HeaderLoginAndSignup>Login</HeaderLoginAndSignup>
                    <SignupForm onSubmit={this.onLoginSubmit}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
