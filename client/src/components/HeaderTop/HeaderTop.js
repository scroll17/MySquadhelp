import React, {Component} from 'react';
import style from './HeaderTop.module.sass';

import ContactsDetails from './ContactsDetails/ContactsDetails'
import LoginSignUp from './LoginSignUp/LoginSignUp'

class HeaderTop extends Component {
    render() {
        return (
            <div className={style.HeaderTop}>
                <div className={style.Container}>
                    <ContactsDetails />
                    <LoginSignUp />
                </div>
            </div>
        )
    }
}
export default HeaderTop;

