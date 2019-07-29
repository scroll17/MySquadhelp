import React, {Component} from 'react';
import style from './AdminList.module.sass';

import ListTo from './ListTo/ListTo';
import ListItem from './ListItem/ListItem';

import userList from '../../utils/usersList';

import connect from "react-redux/es/connect/connect";

import { getAllUsers } from "../../actions/actionCreator";



class AdminList extends Component {
    constructor(props) {
        super(props);
    }

    clickToBan(user) {
        console.log(user);
    }

    isBanned(user) {
        return true;
        //return !!this.state.active.find(u => u === user);
    }

    userParser(list) {
        return list.map( u => {
            const user = u.dataValues;
            return (
                <ListItem
                    name={`${user.firstName} ${user.lastName}`}
                    img={user.img}
                    //status={this.isBanned(user.name)}
                    clickToItem={this.clickToBan}
                    key={user.id} //TODO id => email
                />
            )
        });
    }


    render() {
        //const { active } = this.state;
        return (
            <div className={style.List} onMouseDown={(e) => {e.preventDefault()}}>
{/*                <ListTo active={active} clickToItem={this.clickToBan}/>*/}
                {this.userParser(this.props.users)}
            </div>
        )
    }

    componentDidMount() {
       this.props.getAllUsers();
    }
}

const mapStateToProps = (state) => ({
    users: state.userReducers.users
});

const mapDispatchToProps = dispatch => ({
    getAllUsers: () => dispatch(getAllUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminList);
