import React, {Component} from 'react';
import style from './SignupForm.module.sass';

import { Link } from "react-router-dom";

import { reduxForm } from 'redux-form';

import Input from './Input/Input'
import JoinAs from './JoinAs/JoinAs'


class SignupForm extends Component {

    render () {
        const {handleSubmit} = this.props;
        return (

            <div className={style.LoginForm}>
                <div className={style.SignupText}>
                    <h2>CREATE AN ACCOUNT</h2>
                    <h4>We always keep your name and email address private.</h4>
                </div>
                <form onSubmit={handleSubmit} className={style.FormWrapper}>

                    <Input name={{one:"firstName", two:'lastName'}}
                           placeholder={{one:"First name", two:'Last name'}}
                    />
                    <Input name={{one:"displayName", two:'email'}}
                           placeholder={{one:"Display name", two:'Email Address'}}
                    />
                    <Input name={{one:"password", two:'password'}}
                           placeholder={{one:"Password", two:'Password Confirmation'}}
                    />


                    <JoinAs />
                    <JoinAs />

                    <div className={style.Buttom}>
                        <button type="submit" label="LOGIN">Create account</button>
                    </div>

                    <div className={style.Fineprint}>
                        <p>By clicking this button, you agree to our <Link to={"/Terms&Conditions"}>Terms of Service.</Link></p>
                    </div>
                </form>
            </div>

        );
    }
}

SignupForm = reduxForm ({
    form: 'Signup',
})(SignupForm);

export default SignupForm;
