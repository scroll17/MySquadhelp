import React  from 'react';
import style from './HeaderBottom.module.sass';

import { Link } from "react-router-dom";

import ListItem from './ListItem/ListItem'

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
                                    <>dfgdf</>
                                </ListItem>

                                <ListItem>
                                    Contests
                                    <>dfgdfg</>
                                </ListItem>

                                <ListItem>
                                    Our Work
                                    <>Bedfgdfgauty</>
                                </ListItem>

                                <ListItem>
                                    Names For Sale
                                    <>dfgd</>
                                </ListItem>

                                <ListItem>
                                    Blog
                                    <>fgdfg</>
                                </ListItem>
                            </ul>
                        </div>

                        <div className={style.StartContest}>
                            <Link to={'/contesttype'}>start contest</Link>
                        </div>

                    </div>
                </div>
            </div>
        )
}

export default HeaderBottom;
