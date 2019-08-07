import React, { useState } from 'react';
import style from './ContestsForm.sass';

import { Field, reduxForm } from 'redux-form';
import connect from "react-redux/es/connect/connect";



function ContestsForm(props){

    const [page, setPage] = useState(1);

    const nextPage = () =>{
        setPage(page+1)
    };

    const previousPage = () =>{
        setPage(page-1)
    };

        return (
            <div>
                {page === 1 && <div>aaaaaaaaaaaaaaaaa</div>}
            </div>
        );

}


const mapStateToProps = (state) => ({
    contest: state.userReducers.contest
});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ContestsForm);