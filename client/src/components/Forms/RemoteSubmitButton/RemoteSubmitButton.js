import React from 'react'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

function RemoteSubmitButton(props) {
    const SubmitButton = ({ dispatch }) => (
        <button
            type="button"
            onClick={() => dispatch(submit(props.nameForm))}
        >
            Submit
        </button>
    );
    return connect()(SubmitButton)
}
export default RemoteSubmitButton;