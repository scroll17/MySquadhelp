import React, { useState } from 'react';
import style from './ContestsForm.module.sass';

import { Field, reduxForm } from 'redux-form';
import connect from "react-redux/es/connect/connect";

import NameForm from './NameForm/NameForm'
import {asyncValidation} from "../../../validation/asyncValidation";
import SignupForm from "../SignupForm/SignupForm";

import RemoteSubmitButton from '../RemoteSubmitButton/RemoteSubmitButton'
import {createContest} from "../../../actions/actionCreator";

function ContestsForm(props){

    const [page, setPage] = useState(1);


    const createNewContest = (values) => {
        console.log(values);
        return props.createNewContest(values)
    };


    const nextPage = () =>{
        setPage(page+1)
    };
    const previousPage = () =>{
        setPage(page-1)
    };

        return (
            <div className={style.stepsForm}>
                <div className={style.container}>
                    <div className={style.row}>


                          {page === 1 && (
                              <>
                                  <NameForm onSubmit={createNewContest}/>
                                  <RemoteSubmitButton nameForm={'contest'}/>
                              </>
                              )}

                    </div>
                </div>
            </div>
        );

}

const mapStateToProps = (state) => ({
    contest: state.userReducers.contest
});
const mapDispatchToProps = dispatch => ({
    createNewContest: contest => dispatch(createContest(contest)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestsForm);