import React, {Component} from 'react';
import { Link } from "react-router-dom";
import style from './AdminList.module.sass';

import ListTo from './ListTo/ListTo';
import ListItem from './ListItem/ListItem';


import connect from "react-redux/es/connect/connect";

import { getAllUsers, banUserById } from "../../actions/actionCreator";


class AdminList extends Component {
    clickToBan = (userId, isBanned) => {
        this.props.banUserById(userId, isBanned);
    };

    bannedUsers = (users) =>{
        return users.filter(user => {
            return user.isBanned
        });
    };

    userParser(list) {
        return list.map( user => {
            return (
                <ListItem
                    name={`${user.firstName} ${user.lastName}`}
                    status={user.isBanned}
                    id={user.id}
                    clickToItem={this.clickToBan}
                    key={user.id} //TODO id => email
                />
            )
        });
    }


    render() {
        const { users } = this.props;
        return (
            <div className={style.List} onMouseDown={(e) => {e.preventDefault()}}>
                <ListTo active={this.bannedUsers(users)} clickToItem={this.clickToBan}/>
                {this.userParser(users)}

                <Link to={'/'} className={style.Main}>
                    <div>
                        Main
                    </div>
                </Link>
            </div>
        )
    }

    componentDidMount() {
        const { users, user} = this.props;
        if(!!user && users.length <= 0){
            this.props.getAllUsers();
        }
    }
}

const mapStateToProps = (state) => ({
    user: state.userReducers.user,
    users: state.userReducers.users,
});

const mapDispatchToProps = dispatch => ({
    getAllUsers: () => dispatch(getAllUsers()),
    banUserById: (userId, isBanned) => dispatch(banUserById(userId, isBanned)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminList);
