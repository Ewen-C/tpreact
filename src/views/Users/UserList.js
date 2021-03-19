import React, {Component} from 'react';
import {UserService} from "../../services/user.service";
import User from "../../components/User";

export default class UserList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        let users = await UserService.list();
        this.setState({users: users});
    }

    render() {
        let {users} = this.state;
        return <div className="container">
            <h1>Liste des utilisateurs</h1>

            <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Téléphone</th>
                    <th>Site web</th>
                    <th>Nombre de tâches</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>

                    {users.map(user => {
                        return <User user={user}/>
                    })}

                </tbody>
            </table>

        </div>
    }
}
