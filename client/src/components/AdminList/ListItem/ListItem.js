import React from 'react';
import style from './ListItem.module.sass';

function ListItem(props){

    const img = {backgroundImage: `url(${props.img})`};

        return(
            <div className={style.ListItem} onClick={() => props.clickToItem(props.name)}>
                <div className={style.AvatarAndData}>
                    <div className={style.Avatar} style={img} />

                    <div className={style.NameAndLevel}>
                        <div className={style.ListItemName}>
                            {props.name}
                        </div>
                    </div>
                </div>

               {/* <div className={ props.status ? style.Active : style.Passive } >
                    <i className="fas fa-check check"></i>
                </div>*/}
            </div>
        )
}

export default ListItem;
