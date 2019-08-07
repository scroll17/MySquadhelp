import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";

import style from "./ContestTypePage.module.sass";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import HeaderBottom from "../../components/HeaderBottom/HeaderBottom";

import ContestSteps from '../../components/ContestType/ContestSteps'
import ContestsForm from '../../components/Forms/ContestsForm/ContestsForm'
import StartContestSteps from "../../components/ContestType/StartContestSteps/StartContestSteps";


import {createContest, nextContestStage} from "../../actions/actionCreator";

class ContestTypePage extends Component{

    render() {
        return (
            <>
                <header className={style.header}>
                    <HeaderTop/>
                    <HeaderBottom/>
                </header>

                <StartContestSteps />

                {this.props.contest[this.props.contest.length-1] === 'select' ?
                    <ContestSteps />
                    :
                    <ContestsForm />
                }
            </>
        )
    }
}


const mapStateToProps = (state) => ({
    contest: state.userReducers.contest
});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ContestTypePage);
