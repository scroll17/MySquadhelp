import React, { useState, useEffect } from 'react';
import style from './LoginForm.module.sass';

import { Field, reduxForm } from 'redux-form';
import connect from "react-redux/es/connect/connect";

import { toast } from 'react-toastify';

let LoginForm = (props) => {

    const [serverError, setServerError] = useState(false);

    useEffect(() => {
        if(!!props.err){
            const response = props.err.response;
            if(response.status === 404)
                setServerError(true);
            if(response.status === 403) {
                toast.error(response.data.statusText, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        }
    });

    const renderField = ({input, placeholder, type, meta: { touched, error },}) => {
        const borderError = error ? {border: '2px solid #f00'} : null;
        return(
                <>
                    <input {...input} type={type} placeholder={placeholder} className={`${style.inputNormal} ${borderError}`}/>
                    {touched && error && <div className={style.errorContainer}>{error}</div>}
                </>
        )};

        const { handleSubmit, submitting} = props;

        return (
            <div className={style.loginForm}>
                <div className={style.logToYourAc}>
                    <h2>LOGIN TO YOUR ACCOUNT</h2>
                </div>

                {serverError ?
                    <div className={style.serverError}>
                    Invalid Email or Password.
                    </div>
                    : null
                }

                <form onSubmit={ handleSubmit } className={style.form}>
                    <div className={style.email}>
                        <Field name="email" component={renderField}
                               type="email" placeholder="Email address"
                               className={style.inputNormal}
                        />
                    </div>
                    <div className={style.email}>
                        <Field name="password" component={renderField}
                               type="password"
                               placeholder="Password"
                               className={style.inputNormal}
                        />
                    </div>
                    <div className={style.buttom}>
                        <button type="submit" disabled={submitting} label="LOGIN">LOGIN</button>
                    </div>
                </form>
            </div>

        );

}

LoginForm = reduxForm ({
    form: 'login',
})(LoginForm);

const mapStateToProps = (state) => ({
    err: state.userReducers.error
});

export default connect(mapStateToProps)(LoginForm);
