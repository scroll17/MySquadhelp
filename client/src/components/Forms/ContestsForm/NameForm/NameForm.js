import React, { useState, useEffect } from 'react';
import style from './NameForm.sass';

import { Field, reduxForm } from 'redux-form';
import connect from "react-redux/es/connect/connect";

import { toast } from 'react-toastify';

function NameForm(props){

    const [serverError, setServerError] = useState(false);

    useEffect(() => {
        if(!!props.err){
            const response = props.err.response;
            if(response.status === 404) setServerError(true);
            if(response.status === 403) {
                toast.error(response.data.statusText, {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        }
    });

    const renderField = ({input, placeholder, type, meta: { touched, error },}) => {
        const borderError = error ? style.inputError : null;
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

                {!serverError ?
                    null
                    :
                    <div className={style.serverError}>
                        Invalid Email or Password.
                    </div>
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

NameForm = reduxForm ({
    form: 'login',
})(NameForm);

const mapStateToProps = (state) => ({
    err: state.userReducers.error
});

export default connect(mapStateToProps)(NameForm);
