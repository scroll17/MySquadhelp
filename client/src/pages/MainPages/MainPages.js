import React, { Component } from 'react';

import style from "./MainPages.module.sass";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import HeaderBottom from "../../components/HeaderBottom/HeaderBottom";

class MainPages extends Component{
    render() {
        return (
            <header className={style.Header}>
                <HeaderTop />
                <HeaderBottom />
            </header>
        )
    }
}

export default MainPages;
