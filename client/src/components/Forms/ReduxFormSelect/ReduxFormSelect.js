import React from 'react';
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

export default ReduxFormSelect;