import React from 'react';
import style from './NotFoundPages.module.sass';
import {Link} from "react-router-dom";


function NotFoundPages() {
    return (
        <div className={style.NotFoundPages}>
            <div className={style.NameError}>404</div>
            <div className={style.ErrorMassage}>Not Found !</div>

            <Link to={'/'}>
                <div className={style.Logo} />
            </Link>

        </div>
    );
}

export default NotFoundPages;
