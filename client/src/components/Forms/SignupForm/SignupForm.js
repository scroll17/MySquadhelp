import React, {Component} from 'react';
import style from './SignupForm.module.sass';

import { Link } from "react-router-dom";

import { reduxForm, Fields } from 'redux-form';

import Input from './Input/Input'
import JoinAs from './JoinAs/JoinAs'


import { asyncValidation } from '../../../validation/asyncValidation'

class SignupForm extends Component {

    firtsInputs =  props => <Input {...props}
                          name={{one:"firstName", two:'lastName'}}
                          placeholder={{one:"First name", two:'Last name'}}
                          type={{one:"text", two:'text'}}  />;

    secondInputs = props => <Input {...props}
                          name={{one:"displayName", two:'email'}}
                          placeholder={{one:"Display name", two:'Email Address'}}
                          type={{one:"text", two:'email'}}  />;

    thirdInputs = props => <Input {...props}
                         name={{one:"password", two:'passwordRepeat'}}
                         placeholder={{one:"Password", two:'Password Confirmation'}}
                         type={{one:"password", two:'password'}}  />;

    render () {
        const {handleSubmit, submitting} = this.props;
        return (

            <div className={style.loginForm}>
                <div className={style.signupText}>
                    <h2>CREATE AN ACCOUNT</h2>
                    <h4>We always keep your name and email address private.</h4>
                </div>
                <form onSubmit={handleSubmit} className={style.formWrapper}>

                    <Fields names={[ 'firstName', 'lastName' ]} component={this.firtsInputs}/>
                    <Fields names={[ 'displayName', 'email' ]} component={this.secondInputs}/>
                    <Fields names={[ 'password', 'passwordRepeat' ]} component={this.thirdInputs}/>

                    <JoinAs roles={'Buyer'}  />
                    <JoinAs roles={'Creative'} />

                    <div className={style.buttom}>
                        <button type="submit" disabled={submitting} label="LOGIN">Create account</button>
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
    asyncValidate: asyncValidation
})(SignupForm);

export default SignupForm;
