import React from 'react';
import style from './ContestPopularCategories.module.sass';

import ItemContestType from '../ItemContestType/ItemContestType'
import Heading from '../Heading/Heading'

function ContestPopularCategories(){
        return (
            <div className={style.contentType}>
                <div className={style.container}>
                    <div className={style.row}>

                        <Heading
                            color={'#fff'}
                            headerText={"Our Most Popular"}
                            headerBoard={"Categories"}>
                            Pick from our most popular categories, launch a contest and begin receiving submissions
                            right away
                        </Heading>

                        <div className={style.categories}>
                            <ul className={style.listContestType}>
                                <li>
                                    <ItemContestType
                                        src={['Company-Names']}
                                        href={'/startcontest'}
                                        name={'Name'}
                                        text={'Get up and running with the perfect name. '}
                                    />
                                </li>
                                <li>
                                    <ItemContestType
                                        src={['Logos']}
                                        href={'/startcontest'}
                                        name={'Logo'}
                                        text={'Kickstart your venture with a unique, memorable logo '}
                                    />
                                </li>
                                <li>
                                    <ItemContestType
                                        src={['Taglines']}
                                        href={'/startcontest'}
                                        name={'Tagline or Slogan'}
                                        text={'Connect deeply with your target audience with an on-target tagline '}
                                    />
                                </li>
                                <li>
                                    <ItemContestType
                                        src={['Packaging-Design']}
                                        href={'/startcontest'}
                                        name={'Packaging Design'}
                                        text={'Stand out with eye-catching and memorable packaging for your product or brand. '}
                                    />
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        )

}

export default ContestPopularCategories;

