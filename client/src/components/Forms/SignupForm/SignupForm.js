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

            <div className={style.loginForm}>
                <div className={style.signupText}>
                    <h2>CREATE AN ACCOUNT</h2>
                    <h4>We always keep your name and email address private.</h4>
                </div>
                <form onSubmit={handleSubmit} className={style.formWrapper}>

                    <Input name={{one:"firstName", two:'lastName'}}
                           placeholder={{one:"First name", two:'Last name'}}
                    />
                    <Input name={{one:"displayName", two:'email'}}
                           placeholder={{one:"Display name", two:'Email Address'}}
                    />
                    <Input name={{one:"password", two:'passwordRemember'}}
                           placeholder={{one:"Password", two:'Password Confirmation'}}
                    />


                    <JoinAs role={'buyer'} id={1}/>
                    <JoinAs role={'creative'} id={2}/>

                    <div className={style.buttom}>
                        <button type="submit" label="LOGIN">Create account</button>
                    </div>

                    <div className={style.fineprint}>
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
