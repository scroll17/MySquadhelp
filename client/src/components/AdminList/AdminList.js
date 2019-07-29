import React, {Component} from 'react';
import { Link , Redirect } from "react-router-dom";
import style from './AdminList.module.sass';

import ListTo from './ListTo/ListTo';
import ListItem from './ListItem/ListItem';


import connect from "react-redux/es/connect/connect";

import { getAllUsers, banUserById } from "../../actions/actionCreator";



class AdminList extends Component {
    constructor(props) {
        super(props);
    }

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

        if (!this.props.user || this.props.user.role !== 2) return <Redirect to='/notfound' />;

        return (
            <div className={style.List} onMouseDown={(e) => {e.preventDefault()}}>
                <ListTo active={this.bannedUsers(users)} clickToItem={this.clickToBan}/>
                {this.userParser(users)}

                <div className={style.Main}>
                    <Link to={'/'}>Main</Link>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getAllUsers();
    }
}

const mapStateToProps = (state) => ({
    users: state.userReducers.users,
    user: state.userReducers.user,
});

const mapDispatchToProps = dispatch => ({
    getAllUsers: () => dispatch(getAllUsers()),
    banUserById: (userId, isBanned) => dispatch(banUserById(userId, isBanned)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminList);
