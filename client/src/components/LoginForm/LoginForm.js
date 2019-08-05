import React from 'react';
import style from './LoginForm.module.sass';

import { Field, reduxForm } from 'redux-form';

function LoginForm(props){

    const renderField = ({input, placeholder, type, meta: { touched, error },}) => (
                <div className={style.Email}>
                    <input {...input} type={type} placeholder={placeholder} className={style.InputNormal}/>
                    {touched && error && <div className={style.errorContainer}>{error}</div>}
                </div>
        );

        const { handleSubmit, submitting} = props;

        return (
            <div className={style.LoginForm}>
                <div className={style.LogToYourAc}>
                    <h2>LOGIN TO YOUR ACCOUNT</h2>
                </div>

                <form onSubmit={ handleSubmit} className={style.Form}>
                    <div className={style.Email}>
                        <Field name="email" component="input"
                               type="email" placeholder="Email address"
                               className={style.InputNormal}
                        />
                    </div>
                    <div className={style.Email}>
                        <Field name="password" component="input"
                               type="password"
                               placeholder="Password"
                               className={style.InputNormal}
                        />
                    </div>
                    <div className={style.Buttom}>
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
