import React, { useState, useEffect }  from 'react';
import style from './StartContestSteps.module.sass';


import ProgressMain from './ProgressMain/ProgressMain'

function StartContestSteps(){

    return (
        <div className={style.StartContestSteps}>
            <div className={style.container}>
                <div className={style.row}>

                    <div className={style.HeadingSteps}>
                        <h2 className={style.Text}>start a contest</h2>
                        <p>
                            Launching a contest on Squadhelp is very simple. Select the type of contest you would like
                            to
                            launch from the list below. Provide a detailed brief and select a pricing package. Begin
                            receiving submissions instantly!
                        </p>
                    </div>

                    <ProgressMain/>

                </div>
            </div>
        </div>
    )

}

export default StartContestSteps;

