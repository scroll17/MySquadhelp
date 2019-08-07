import React, { useState }  from 'react';
import style from './ItemContestType.module.sass';

import { Link } from "react-router-dom";

import { nextContestStage } from "../../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";

function ItemContestType(props){

    const [imagesColor, setImagesColor] = useState('grey');

    const images = (img, color) => ({ backgroundImage: `url(https://www.squadhelp.com/story_images/contest_types/${img}${color}.png)`});

    const divImg = (items, color) => items.map( item => {
        if(color === 'blue') return (
            <div key={item}
                 style={images(item, '_blue')}
                 className={style.image}
            />);

        return (
            <div key={item}
                 style={images(item, '_grey')}
                 className={style.image}
            />)
    });

    return (
        <span className={style.container}
           onClick={() => props.nextContestStage(props.contestTo)}
           onMouseOver={() => setImagesColor('blue')}
           onMouseOut={() => setImagesColor('grey')}

        >

            <div className={style.images}>
                {divImg(props.src, imagesColor)}
            </div>

            <h5>{props.name}</h5>
            <hr />
            <p>{props.text}</p>

        </span>
    )
}

const mapStateToProps = (state) => ({
    contest: state.userReducers.contest
});
const mapDispatchToProps = dispatch => ({
    nextContestStage: stage => dispatch(nextContestStage(stage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemContestType);
