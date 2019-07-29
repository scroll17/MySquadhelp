import React from 'react';
import { Link } from "react-router-dom";

import style from './HeaderLoginAndSignup.module.sass';


function HeaderLoginAndSignup(props) {
    return (
        <div className={style.Header}>
            <Link to={'/'}>
                <div className={style.Logo} />
            </Link>
            <div className={style.LoginBottom}>
                <Link to={'/signup'}>{props.children}</Link>
            </div>
        </div>
    )
}

export default HeaderLoginAndSignup;
