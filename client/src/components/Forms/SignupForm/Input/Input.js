import React from 'react';
import style from './Input.module.sass';

import { Field } from 'redux-form';


function Input(props) {
    const {name, placeholder} = props;

    const renderField = ({ input, label, type, meta: {  touched, error }, }) => (
            <div className={style.field}>
                <input {...input} type={type} placeholder={label} style={{borderColor:(error && touched)?"red":"white"}}/>
                {touched && error && <div className={style.errorContainer}>{error}</div>}
            </div>
    );

    return (
        <div className={style.row}>
            <div className={style.fieldContainer}>
                <Field name={name.one} component="input" type="text" placeholder={placeholder.one}/>
            </div>
            <div className={style.fieldContainer}>
                <Field name={name.two} component="input" type="text" placeholder={placeholder.two}/>
            </div>
        </div>
    )
}
export default Input;
