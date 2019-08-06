import React, { useState, useEffect }  from 'react';
import style from './BannerHome.module.sass';

/*import { Link } from "react-router-dom";*/

import Button from '../../Button/Button'

function BannerHome(){

        const ivites = [
            ' a Company',
            " a Brand",
            " a Website",
            " a Service",
            " a Book",
            " a Business",
            " an App",
            " a Product",
            " a Startup"].map( i => <b>{i}<span/></b>);

        const [sentence, setSentence] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                if(sentence < ivites.length - 1 ) setSentence(sentence+1);
                else {setSentence(0)}
            },4000);
            return () => clearInterval(interval);
        });


        return (
            <div className={style.main}>

                <div className={style.carouselSide}>
                    <div className={style.bannerHome}>
                        <div className={style.container}>
                            <div className={style.bannerContent}>

                                <h1 className={style.loadingBar}>
                                    <span>Find the Perfect Name for</span>
                                    <span className={style.wordsWrapper}>{ivites[sentence]}</span>
                                </h1>

                                <p>
                                    <span>Launch a naming contest to engage hundreds of naming experts as you’re guided through our agency-level naming process.</span>
                                    <br />
                                    <span>Or, explore our hand-picked collection of premium names available for immediate purchase</span>
                                </p>


                                <ul>
                                    <li className={style.startContest}>
                                        <Button link={"/contesttype"}>start a contest</Button>
                                    </li>
                                    <li className={style.liOr}>Or</li>
                                    <li className={style.exploreNames}>
                                        <Button link={"/premium-domains-for-sale/all"}>Explore Names For Sale</Button>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )

}

export default BannerHome;


/*
*

                animation-duration: 6s
                animation-iteration-count: infinite


                &:after
                  background-color: #ff6000
                  display: block
                  content: ""
                  height: 3px
                  transition: loader .3s ease-in-out


                @keyframes loader
                  0%
                    width: 0%
                  100%
                    width: 100%
* */