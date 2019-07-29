import React from 'react';
import style from './ListItem.module.sass';

function ListItem(props){

        return(
            <div className={style.ListItem} onClick={() => props.clickToItem(props.id, props.status)}>
                <div className={style.AvatarAndData}>
                    <div className={style.Avatar} />

                    <div className={style.NameAndLevel}>
                        <div className={style.ListItemName}>
                            {props.name}
                        </div>
                    </div>
                </div>

                <div className={ props.status ? style.Active : style.Passive } >
                    <i className="fas fa-check check" />
                </div>
            </div>
        )
}

export default ListItem;
