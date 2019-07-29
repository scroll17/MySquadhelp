import React from 'react';
import { Link } from "react-router-dom";

import style from './LoginSignUp.module.sass';
import { userLogout } from "../../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";


class LoginSignUp extends React.Component {
    constructor(props){
        super(props)
    }

    toLogoutClick = () => this.props.toLogoutClick();

    navigation = ({user, toLogoutClick}) => {
        if (user) {
            let adminPanel = user.role === 2 ? (<span><Link to={"/adminpanel"}>Admin panel</Link></span>) : null;
            console.log('user.role:', user.role);

            return(
                <>
                    <span className={style.InformUser}>
                        <div className={style.IconUser} />
                         Hi, {user.firstName}
                        <i className="fa fa-angle-down"/>
                    </span>
                    <span className={style.Logout} onClick={toLogoutClick}>
                        (Logout)
                    </span>
                    <span>
                        {adminPanel}
                    </span>
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

    render(){
        return (
            <div className={style.LoginSignUp}>
                <div className={style.Row}>
                    {this.navigation(this.props)}
                </div>
            </div>
        )
    }


}

const mapStateToProps = (state) => ({
    user: state.userReducers.user
});

const mapDispatchToProps = dispatch => ({
    toLogoutClick: () => dispatch(userLogout(localStorage.getItem("refreshToken"))),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignUp);

