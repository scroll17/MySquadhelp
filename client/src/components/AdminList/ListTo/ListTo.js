import React from 'react';
import style from './ListTo.module.sass';

function ListTo({active, clickToItem}) {

    const renderNames = () => {
        const namesLength = active.length;
        if(namesLength > 0) {
            return active.map( (u,index) => {
                const coma = (index === namesLength-1 ) ? " " : ", ";
                return <span onClick={()=>clickToItem(u)}>{ u }{coma} </span>
            })
        }
        return '';
    };

    return (
        <div className={style.ListTo}>
            <div className={style.To}>
                To:
            </div>
            <div className={style.ListName}>
                {renderNames()}
            </div>
        </div>
    );
}

export default ListTo;
