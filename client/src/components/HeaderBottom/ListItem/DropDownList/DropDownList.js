import React  from 'react';
import style from './DropDownList.module.sass';

import { Link } from "react-router-dom";


function DropDownList(props){
    console.log(props);
        return (
            <ul className={style.DropMenu}>
                {props.elements.map( item => {
                    return (
                        <Link to={"/"}>
                            <li key={item.props.children}>{item}</li>
                        </Link>
                    )
                })}
            </ul>
        )
}

export default DropDownList;
