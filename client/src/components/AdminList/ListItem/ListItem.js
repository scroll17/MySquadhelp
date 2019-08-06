import React from 'react';
import style from './ListItem.module.sass';

function ListItem(props){
        return(
            <div className={style.listItem} onClick={() => props.clickToItem(props.id, props.status)}>
                <div className={style.avatarAndData}>
                    <div className={style.avatar} />

                    <div className={style.nameAndLevel}>
                        <div className={style.listItemName}>
                            {props.name}
                        </div>
                    </div>
                </div>

                <div className={ props.status ? style.active : style.passive } >
                    <i className="fas fa-check check" />
                </div>
            </div>
        )
}

export default ListItem;
