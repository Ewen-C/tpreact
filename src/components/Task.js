import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Task extends Component{

    render() {
        let {task} = this.props;
        return <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text">{task.body}</p>
                    <p className="card-text">{task.user.name} ({task.user.username})</p>
                    <Link to={`/taches/${task.id}`} className="btn btn-primary">Details</Link>
                    <Link to={`/taches/${task.id}/modifier`} className="btn btn-warning mx-2">Modifier</Link>
                </div>
        </div>
    }
}
