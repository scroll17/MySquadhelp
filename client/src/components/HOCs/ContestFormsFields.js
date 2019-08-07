import React from 'react'
import { Fields, reduxForm } from 'redux-form';
import {asyncValidation} from "../../validation/asyncValidation";
import SignupForm from "../Forms/SignupForm/SignupForm";

import connect from "react-redux/es/connect/connect";
import {createContest} from "../../actions/actionCreator";

const ContestFormsFields = (WrappedFrom, inputNames, formName) => {

    const formFields = (props) => {
        const { handleSubmit, submitting} = props;

        const createNewContest = (values) => {
            console.log(values);
            return props.createNewContest(values)
        };

        return(
            <form onSubmit={handleSubmit(createNewContest)}>
                <Fields names={inputNames} component={WrappedFrom}/>
            </form>
        )
    };

    reduxForm ({
        form: formName,
    })(formFields);

    const mapStateToProps = (state) => ({
        contest: state.userReducers.contest
    });
    const mapDispatchToProps = dispatch => ({
        createNewContest: contest => dispatch(createContest(contest)),
    });

    return connect(mapStateToProps, mapDispatchToProps)(formFields);
};


export default connect(mapStateToProps, mapDispatchToProps)(ContestFormsFields);
