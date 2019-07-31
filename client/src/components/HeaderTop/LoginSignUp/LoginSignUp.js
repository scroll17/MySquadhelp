import React , { useState } from 'react';
import {Link} from "react-router-dom";

import style from './LoginSignUp.module.sass';
import {userLogout} from "../../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";


function LoginSignUp(props){
    const [display, setDisplay] = useState('none');

    const toOpenMenu = () => {
        const status = display === "none" ? "block" : "none";
        setDisplay(status);
    };

    const navigation = ({user, toLogoutClick}) => {
        if (user) {
            let adminPanel = user.role === 2 ?
                (<Link to={"/adminpanel"} style={{color: "#b212eb"}}><li id={style.Admin}>Admin panel </li></Link>)
                : null;

            return(
                <>
                    <span className={style.InformUser} onMouseDown={(e) => {e.preventDefault()}} onClick={toOpenMenu}>
                        <div className={style.IconUser} />
                         Hi, {user.firstName}
                        <i className="fa fa-angle-down"/>
                    </span>

                    {display === "block" &&
                        <ul id={style.DropdownMenu} >
                            <Link to={"/dashboard"}><li> View Dashboard </li></Link>
                            <Link to={"/myaccount"}> <li> My Account </li></Link>
                            <Link to={"/messages"}> <li> Messages </li></Link>
                            <Link to={"/affiliate-dashboard"}> <li> Affiliate Dashboard </li></Link>
                            {adminPanel}
                            <a onClick={toLogoutClick}><li>Logout</li></a>
                        </ul>
                    }

                    <Link to={'/messages'} className={style.Message} >
                        <i className="far fa-envelope" />
                    </Link>
                </>
            )
        }else{
            return(
                <>
                    <span>
                        <Link to={"/login"}>Login</Link>
                    </span>
                    <span>
                        <Link to={"/signup"}>Sign Up</Link>
                    </span>
                </>
            )
        }
    };

    return (
        <div className={style.LoginSignUp}>
            <div className={style.Row}>
                {navigation(props)}
            </div>
        </div>
    )


}

const mapStateToProps = (state) => ({
    user: state.userReducers.user
});

const mapDispatchToProps = dispatch => ({
    toLogoutClick: () => dispatch(userLogout(localStorage.getItem("refreshToken"))),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignUp);

