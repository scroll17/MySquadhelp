import React from 'react';
import style from './JoinAs.module.sass';

import { Field } from 'redux-form';


function JoinAs(props) {
    const { role, id, chek } = props;

    return (
        <div className={style.row}>
            <div className={style.joinAs}>

                <span className={style.input}>
                    <Field name="role" component="input" type="radio"  value={role} />
                </span>

                   <div className={style.joinLabel}>
                     Join As a {role[0].toUpperCase() + role.slice(1)}
                   </div>
                    <div className={style.textJoin}>
                     I am looking for a Name, Logo or Tagline for my business, brand or product.
                   </div>

            </div>
        </div>
    )
}
export default JoinAs;
