import React, { Component } from 'react';

import style from "./ContestTypePage.module.sass";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import HeaderBottom from "../../components/HeaderBottom/HeaderBottom";
import ContestSteps from '../../components/ContestType/ContestSteps'

class ContestTypePage extends Component{
    render() {
        return (
            <header className={style.Header}>
                <HeaderTop />
                <HeaderBottom />
                <ContestSteps />
            </header>
        )
    }
}

export default ContestTypePage;
