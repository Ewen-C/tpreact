import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class User extends Component{

    render() {
        let {user} = this.props;
        return <tr>
            <td>{user.name} ({user.username})</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>{user.nbrTasks}</td>
            //<td>{user.taskCompleted}</td>
            <td><Link to={`/utilisateurs/${user.id}`} className="btn btn-primary">Détails</Link></td>
            <td><Link to={`/utilisateurs/${user.id}/modifier`} className="btn btn-warning">Modifier</Link></td>
        </tr>

    }
}
