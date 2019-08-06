import React  from 'react';
import connect from "react-redux/es/connect/connect";
import style from "./LoginPages.module.sass";

import { loginUser } from "../../actions/actionCreator";

import HeaderLoginAndSignup from "../../components/HeaderLoginAndSignup/HeaderLoginAndSignup";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";

import { SubmissionError } from 'redux-form';

import * as yup from 'yup';
import schema from'../../models/yupValidation';

function LoginPage(props){

    const onLoginSubmit = async (values) => {

        const resEmail = await yup.reach(schema, 'email').isValid(values.email);

        if (!resEmail || !values.email) {
            throw new SubmissionError({
                email: 'Email is not valid format',
                _error: 'Login failed!',
            });
        }
        if(!values.password){
            throw new SubmissionError({
                password: 'Password cannot be empty',
                _error: 'Password failed!',
            });
        }

        return props.onLoginSubmit(values)
    };

    return (
        <main className={style.userSignupFlow}>
            <div className={style.container}>
                <HeaderLoginAndSignup>Signup</HeaderLoginAndSignup>
                <LoginForm onSubmit={onLoginSubmit}/>
            </div>
        </main>
    )
}

const mapStateToProps = (state) => ({
    user: state.userReducers.user
});
const mapDispatchToProps = dispatch => ({
    onLoginSubmit: user => dispatch(loginUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
