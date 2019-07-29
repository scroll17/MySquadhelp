import React from 'react';
import style from './ListTo.module.sass';

function ListTo(props){

    let bannedUsers = [];
    props.active.forEach((user) => {
        if (user.isBanned) {
            bannedUsers.push(user);
        }
    });

    const renderNames = () => {
        const namesLength = bannedUsers.length;
        if(namesLength > 0) {
            return bannedUsers.map( (user,index) => {
                const coma = (index === namesLength-1 ) ? " " : ", ";
                return <span key={user.id} onClick={()=>props.clickToItem(user.id, user.isBanned)}>{ `${user.firstName} id:${user.id}` }{coma} </span>
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
