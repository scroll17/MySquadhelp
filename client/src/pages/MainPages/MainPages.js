import React, { Component } from 'react';

import style from "./MainPages.module.sass";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import HeaderBottom from "../../components/HeaderBottom/HeaderBottom";
import BannerHome from '../../components/BannerHome/BannerHome'
import HowItWorksHome from '../../components/HowItWorksHome/HowItWorksHome'

class MainPages extends Component{
    render() {
        return (
            <header className={style.Header}>
                <HeaderTop />
                <HeaderBottom />
                <BannerHome />
                <HowItWorksHome />
            </header>
        )
    }
}

export default MainPages;
