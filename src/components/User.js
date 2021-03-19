import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class User extends Component{

    render() {
        let {user} = this.props;
        return <div className="card">
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.email}</p>
                <Link to={`/utilisateurs/${user.id}`} className="btn btn-primary">Détails</Link>
                <Link to={`/utilisateurs/${user.id}/modifier`} className="btn btn-warning">Modifier</Link>
            </div>
        </div>
    }
}
