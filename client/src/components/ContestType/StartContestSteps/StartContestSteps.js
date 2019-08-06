import React from 'react';
import style from './StartContestSteps.module.sass';


import ProgressMain from './ProgressMain/ProgressMain'

function StartContestSteps(){

    return (
        <div className={style.startContestSteps}>
            <div className={style.container}>
                <div className={style.row}>

                    <div className={style.headingSteps}>
                        <h2 className={style.text}>start a contest</h2>
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

