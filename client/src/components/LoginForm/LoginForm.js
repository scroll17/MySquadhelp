import React from 'react';
import style from './LoginForm.module.sass';

import { Field, reduxForm } from 'redux-form';

function LoginForm(props){

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

export default LoginForm;
