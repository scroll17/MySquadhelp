import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";

import style from "./SignupPage.module.sass";
import HeaderLoginAndSignup from "../../components/HeaderLoginAndSignup/HeaderLoginAndSignup";
import SignupForm from "../../components/SignupForm/SignupForm";

import { createUser } from "../../actions/actionCreator";



class SignupPage extends Component{
    constructor(props){
        super(props)
    }

    onSignupSubmit = values => {
        const dataSend = {
            firstName:values.firstName,
            lastName:values.lastName,
            displayName:values.displayName,
            email: values.email,
            password: values.password,
        };
        this.props.onSignupSubmit(dataSend)
    };

    render(){
        return (
            <main className={style.UserSignupFlow}>
                <div className={style.Container}>
                    <HeaderLoginAndSignup>Login</HeaderLoginAndSignup>
                    <SignupForm onSubmit={this.onSignupSubmit}/>
                </div>
            </main>
        );
    }
}


const mapStateToProps = (state) => ({
    user: state.userReducers.user
});

const mapDispatchToProps = dispatch => ({
    onSignupSubmit: user => dispatch(createUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
