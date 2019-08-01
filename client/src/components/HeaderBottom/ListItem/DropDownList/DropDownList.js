import React  from 'react';
import style from './DropDownList.module.sass';

import { Link } from "react-router-dom";


function DropDownList(props){
    const visible = props.visible ? {display: "block"} : {display: "none"};
        return (
            <ul className={style.DropMenu} style={visible}>
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
