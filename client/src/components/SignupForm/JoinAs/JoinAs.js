import React from 'react';
import style from './JoinAs.module.sass';

import { Field } from 'redux-form';


function JoinAs(props) {
    //const {name, placeholder} = props;

    return (
        <div className={style.row}>
            <div className={style.joinAs}>
                <span className={style.input}><Field name="TypeCreationAccount" component="input" type="radio" id={'check1'} value={"Buyer"}/> </span>
                <span>

                   <div className={style.joinLabel}>
                     Join As a Buyer
                   </div>
                    <div className={style.textJoin}>
                     I am looking for a Name, Logo or Tagline for my business, brand or product.
                   </div>

               </span>
            </div>
        </div>
    )
}
export default JoinAs;
