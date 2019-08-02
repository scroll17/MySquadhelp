import React, { useState, useEffect }  from 'react';
import style from './HowItWorksHome.module.sass';

import Button from '../Button/Button'

import { Carousel } from 'react-bootstrap';

function HowItWorksHome(){

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

        return (
            <div className={style.Main}>
                <div className={style.Container}>
                    <div className={style.Row}>

                        <ul className={style.NavTabs}>
                            <li  className={style.Active}>
                                <span>Names</span>
                            </li>
                            <li  className={style.Larged}>
                                <span>Taglines & Slogans</span>
                            </li>
                            <li  className={style.Larged}>
                                <span>Logo Designs</span>
                            </li>
                        </ul>

                        <div className={style.TabContent}>
                            <Carousel indicators={false} interval={2000} pauseOnHover={true}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://www.squadhelp.com/story_images/visual_images/B_2_15.jpg"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://www.squadhelp.com/story_images/visual_images/B_2_15.jpg"
                                        alt="Third slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://www.squadhelp.com/story_images/visual_images/B_2_15.jpg"
                                        alt="Third slide"
                                    />

                                </Carousel.Item>
                            </Carousel>
                        </div>



                        <div className={style.Button}>
                            <Button link={"/Name-Ideas"}>More Name Examples</Button>
                        </div>

                    </div>
                </div>
            </div>
        )

}

export default HowItWorksHome;

