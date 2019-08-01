import React from 'react';
import style from './ContactsDetails.module.sass';

function ContactsDetails(props){
    return (
        <div className={style.ContactsDetails}>
            <div className={style.Contacts}>
                <i className="fa fa-phone"/>
                <a href={"tel:(877)355-3585"}>(877) 355-3585</a>
            </div>
        </div>
    )
}
export default ContactsDetails;
