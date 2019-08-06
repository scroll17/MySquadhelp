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
            let adminPanel = user.role === "admin" ?
                <Link to={"/adminpanel"} style={{color: "#3ea9f5"}}><li id={style.admin}>Admin panel </li></Link>
                : null;

            return(
                <>
                    <span className={style.informUser} onMouseDown={(e) => {e.preventDefault()}} onClick={toOpenMenu}>
                        <div className={style.iconUser} />
                         Hi, {user.firstName}
                        <i className="fa fa-angle-down"/>
                    </span>

                    {display === "block" &&
                        <ul id={style.dropdownMenu} >
                            <Link to={"/dashboard"}><li> View Dashboard </li></Link>
                            <Link to={"/myaccount"}> <li> My Account </li></Link>
                            <Link to={"/messages"}> <li> Messages </li></Link>
                            <Link to={"/affiliate-dashboard"}> <li> Affiliate Dashboard </li></Link>
                            {adminPanel}
                            <Link to={""} onClick={toLogoutClick} ><li>Logout</li></Link>
                        </ul>
                    }

                    <Link to={'/messages'} className={style.message} >
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
        <div className={style.loginSignUp}>
            <div className={style.row}>
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

