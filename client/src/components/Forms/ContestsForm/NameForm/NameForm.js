import React from 'react';
import style from './NameForm.module.sass';

import { Field, reduxForm } from 'redux-form';

import Select from 'react-select';


const ReduxFormSelect = props => {
    const { input, options } = props;

    return (
        <Select
            {...input}
            onBlur={() => input.onBlur(input.value)}
            options={options}
        />
    )
};



function NameForm(props) {

    const color = [
            {value:'Red'},
            {value:'Orange'},
            {value:'Green'}
        ];



    const { handleSubmit } = props;


    return(
        <div>
            <form onSubmit={ handleSubmit }>
                <Field name="type" component={ReduxFormSelect} options={color} />
                <Field name="typeOfVenture" component={ReduxFormSelect} options={color} isMulti/>
                <Field name="whatVentureDoes" component="textarea" placeholder="Notes" />
                <Field name="targetCustomers" component="textarea" placeholder="Notes" />
                <Field name="style" component="textarea" placeholder="Notes" />
                <Field name="description" component="textarea" placeholder="Notes" />
            </form>
        </div>
    )
}

NameForm = reduxForm ({
    form: 'contest',
})(NameForm);

export default NameForm;
