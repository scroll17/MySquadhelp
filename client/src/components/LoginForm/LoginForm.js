import React, {Component} from 'react';
import style from './LoginForm.module.sass';

import { Field, reduxForm } from 'redux-form';

class LoginForm extends Component {
    constructor(props){
        super(props)

    }
    render () {
        const {handleSubmit} = this.props;
        return (

            <div className={style.LoginForm}>

                <div className={style.LogToYourAc}>
                    <h2>LOGIN TO YOUR ACCOUNT</h2>
                </div>

                <form onSubmit={handleSubmit} className={style.Form}>
                    <div className={style.Email}>
                        <Field name="email" component="input" type="text" placeholder="Email address"/>
                    </div>
                    <div className={style.Email}>
                        <Field name="password" component="input" type="password" placeholder="Password" />
                    </div>
                    <div className={style.Buttom}>
                        <button type="submit" label="LOGIN">LOGIN</button>
                    </div>
                </form>

            </div>

        );
    }
}

LoginForm = reduxForm ({
    form: 'login',
})(LoginForm);

export default LoginForm;
