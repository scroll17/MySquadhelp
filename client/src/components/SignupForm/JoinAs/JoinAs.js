import React from 'react';
import style from './JoinAs.module.sass';

import { Field } from 'redux-form';


function JoinAs(props) {
    const {name, placeholder} = props;

    return (
        <div className={style.Row}>
            <div className={style.JoinAs}>
                <span className={style.Input}><Field name="TypeCreationAccount" component="input" type="radio" id={'check1'} value={"Buyer"}/> </span>
                <span>

                   <div className={style.JoinLabel}>
                     Join As a Buyer
                   </div>
                    <div className={style.TextJoin}>
                     I am looking for a Name, Logo or Tagline for my business, brand or product.
                   </div>

               </span>
            </div>
        </div>
    )
}
export default JoinAs;
