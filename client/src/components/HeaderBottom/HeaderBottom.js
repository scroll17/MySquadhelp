import React  from 'react';
import style from './HeaderBottom.module.sass';

import { Link } from "react-router-dom";

import ListItem from './ListItem/ListItem'
import Button from '../Button/Button'

function HeaderBottom(){

        return (
            <div className={style.Header}>
                <div className={style.Container}>
                    <div className={style.Row}>

                        <Link to={'/'} className={style.Link}>
                            <div className={style.Logo} />
                        </Link>

                        <div className={style.List} >
                            <ul className={style.HeaderList}>
                                <ListItem>
                                    Name Ideas
                                    <>Beauty</>
                                    <>Consulting</>
                                    <>E-commerce</>
                                    <>Fashion & Clothing</>
                                    <>Finance</>
                                    <>Real Estate</>
                                    <>Tech</>
                                    <hr/>
                                    <>More Categories</>
                                </ListItem>

                                <ListItem>
                                    Contests
                                    <>How it Works</>
                                    <>Pricing</>
                                    <>Agency Services</>
                                    <hr />
                                    <>Active Contests</>
                                    <>Winners</>
                                    <>Leaderboard</>
                                    <hr />
                                    <>Become A Creative</>
                                </ListItem>

                                <ListItem>
                                    Our Work
                                    <>Names</>
                                    <>Taglines</>
                                    <>Logos</>
                                    <hr />
                                    <>Testimonials</>
                                </ListItem>

                                <ListItem>
                                    Names For Sale
                                    <>Popular Names</>
                                    <>Short Names</>
                                    <>Intriguing Names</>
                                    <>Names By Category</>
                                    <>Visual Name Generator</>
                                    <hr />
                                    <>Shell Your Domains</>
                                </ListItem>

                                <ListItem>
                                    Blog
                                    <>Ultimate Naming Guide</>
                                    <>Poetic Devices in Business Naming</>
                                    <>Crowded Bar Theory</>
                                    <hr />
                                    <>All Articles</>
                                </ListItem>
                            </ul>
                        </div>

                        <Button link={"/contesttype"}>start contest</Button>

                    </div>
                </div>
            </div>
        )
}

export default HeaderBottom;
