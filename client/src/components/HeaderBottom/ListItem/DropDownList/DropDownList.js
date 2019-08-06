import React  from 'react';
import style from './DropDownList.module.sass';

import { Link } from "react-router-dom";


function DropDownList(props){
    const visible = props.visible ? {display: "block"} : {display: "none"};
        return (
            <ul className={style.DropMenu} style={visible}>q
                {props.elements.map( item => {
                    const key = item.props.children === undefined ? `${Math.random()}12gg45yy` : item.props.children;
                    if(item.type === "hr") return <hr key={key}/>;
                    return (
                        <Link to={"/"} key={key}>
                            <li>{item}</li>
                        </Link>
                    )
                })}
            </ul>
        )
}

export default DropDownList;
