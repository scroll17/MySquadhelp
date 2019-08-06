import React from 'react';
//import style from './ContestSteps.module.sass';


import StartContestSteps from './StartContestSteps/StartContestSteps'
import ContestPopularCategories from './ContestPopularCategories/ContestPopularCategories'
import ContestBundlePackages from './ContestBundlePackages/ContestBundlePackages'
import ContestOtherCategories from './ContestOtherCategories/ContestOtherCategories'

function ContestSteps(){

        return (
            <section>

                <StartContestSteps />
                <ContestPopularCategories />
                <ContestBundlePackages />
                <ContestOtherCategories />

            </section>
        )

}

export default ContestSteps;

