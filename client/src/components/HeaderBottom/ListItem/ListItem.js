import React , { useState } from 'react';
import style from './ListItem.module.sass';

import { Link } from "react-router-dom";

import DropDownList from './DropDownList/DropDownList'

function ListItem(props){
        const [name, ...item] = props.children;
        const [drop, setDrop] = useState(false);

        return (
            <>
                <li className={style.Item}  onMouseOver={() => setDrop(true)} onMouseOut={() => setDrop(false)}>
                    <Link to={"/Name-Ideas"}>
                        {name}
                        <i className="fa fa-angle-down" />
                    </Link>
                </li>
                { drop ? (<DropDownList elements={item} />) : null}
            </>
        )
}

export default ListItem;

