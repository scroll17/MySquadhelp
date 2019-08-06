import React from 'react';
import style from './ProgressMain.module.sass';


function ProgressMain(){

    return (
        <div className={style.progressMain}>
            <div className={style.progressBarStep}>
                <span/>
                <div className={`${style.circle} ${style.done}`}>
                    <span className={style.label}/>
                </div>
                <div className={style.tooltip}>
                    <div className={style.tooltipInner}>
                        1. Select Contest Type
                    </div>
                </div>
            </div>
            <div className={style.progressBarStep}>
                <span className={style.bar}/>
                <div className={style.circle}>
                    <span className={style.label}/>
                </div>
                {/*<div className={style.Tooltip}>
                                </div>*/}
            </div>
            <div className={style.progressBarStep}>
                <span className={style.bar}/>
                <div className={style.circle}>
                    <span className={style.label}/>
                </div>
                {/*<div className={style.Tooltip}>
                                </div>*/}
            </div>
            <div className={style.progressBarStep}>
                <span className={style.bar}/>
                <div className={style.circle}>
                    <span className={style.label}/>
                </div>
                {/*<div className={style.Tooltip}>
                                </div>*/}
            </div>
            <div className={style.progressBarStep}>
                <span className={style.bar}/>
                <div className={style.circle}>
                    <span className={style.label}/>
                </div>
                {/*<div className={style.Tooltip}>
                                </div>*/}
            </div>
            <div className={style.progressBarStep}>
                <span className={style.bar}/>
                <div className={style.circle}>
                    <span className={style.label}/>
                </div>
                {/*<div className={style.Tooltip}>
                                </div>*/}
            </div>
        </div>

    )

}

export default ProgressMain;

