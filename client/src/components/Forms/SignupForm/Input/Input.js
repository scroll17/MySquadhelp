import React from 'react';
import style from './Input.module.sass';

import { Field } from 'redux-form';


function Input(props) {
    const {name, placeholder, names, type} = props;

    const fieldsTouched = (name) => props[names[name]].meta.touched;
    const fieldsError = (name) => props[names[name]].meta.error;

    return (
        <div className={style.row}>
            <div className={style.rowInputs}>
                <div className={style.fieldContainer}>
                    <Field name={name.one} component="input" type={type.one } placeholder={placeholder.one}/>
                </div>
                <div className={style.fieldContainer}>
                    <Field name={name.two} component="input" type={type.two} placeholder={placeholder.two}/>
                </div>
            </div>
            {((fieldsTouched(0) || fieldsTouched(1)) && (fieldsError(0) || fieldsError(1)))  ?
                <div className={style.errorContainer}>{fieldsError(0) || fieldsError(1)}</div>
                : null }
        </div>
    )
}
export default Input;
