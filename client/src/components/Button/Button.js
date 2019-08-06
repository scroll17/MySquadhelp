import React  from 'react';
import style from './Button.module.sass';

import { Link } from "react-router-dom";


function Button(props){
    return (
        <div className={style.startContest}>
            <Link to={props.link}>{props.children}</Link>
        </div>
    )
}

export default Button;
