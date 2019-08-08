import React, { Component } from 'react';

import style from "./MainPages.module.sass";
import HeaderTop from "../../components/HeaderTop/HeaderTop";

import HeaderBottom from "../../components/HeaderBottom/HeaderBottom";

import BannerHome from '../../components/MainHome/BannerHome/BannerHome'
import HowItWorksHome from '../../components/MainHome/HowItWorksHome/HowItWorksHome'
import MarketplaceDomainsHome from '../../components/MainHome/MarketplaceDomainsHome/MarketplaceDomainsHome'

class MainPages extends Component{
    render() {
        return (
            <header className={style.header}>
                <HeaderTop />
                <HeaderBottom />
                <BannerHome />
                <HowItWorksHome />
                <MarketplaceDomainsHome />
            </header>
        )
    }
}

export default MainPages;
