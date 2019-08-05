import React, { useState, useEffect }  from 'react';
import style from './ProgressMain.module.sass';


function ProgressMain(){

    return (
        <div className={style.ProgressMain}>
            <div className={style.ProgressBarStep}>
                <span/>
                <div className={`${style.Circle} ${style.Done}`}>
                    <span className={style.Label}/>
                </div>
                <div className={style.Tooltip}>
                    <div className={style.TooltipInner}>
                        1. Select Contest Type
                    </div>
                </div>
            </div>
            <div className={style.ProgressBarStep}>
                <span className={style.Bar}/>
                <div className={style.Circle}>
                    <span className={style.Label}/>
                </div>
                {/*<div className={style.Tooltip}>
                                </div>*/}
            </div>
            <div className={style.ProgressBarStep}>
                <span className={style.Bar}/>
                <div className={style.Circle}>
                    <span className={style.Label}/>
                </div>
                {/*<div className={style.Tooltip}>
                                </div>*/}
            </div>
            <div className={style.ProgressBarStep}>
                <span className={style.Bar}/>
                <div className={style.Circle}>
                    <span className={style.Label}/>
                </div>
                {/*<div className={style.Tooltip}>
                                </div>*/}
            </div>
            <div className={style.ProgressBarStep}>
                <span className={style.Bar}/>
                <div className={style.Circle}>
                    <span className={style.Label}/>
                </div>
                {/*<div className={style.Tooltip}>
                                </div>*/}
            </div>
            <div className={style.ProgressBarStep}>
                <span className={style.Bar}/>
                <div className={style.Circle}>
                    <span className={style.Label}/>
                </div>
                {/*<div className={style.Tooltip}>
                                </div>*/}
            </div>
        </div>

    )

}

export default ProgressMain;

