import React, {Component} from 'react';
import TaskService from "../../services/task.service";
import {UserService} from "../../services/user.service";

export default class TaskDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {
            task: {},
            user: {}
        }
    }

    async componentDidMount() {
        let {task, user} = this.state;

        let {id} = this.props.match.params;
        let response = await TaskService.details(id);
        this.setState({task: response.data});

        // console.log(response);
        // console.log(task);
        // alert("TEST");

        // let {userId} = task.userId;
        // response = await UserService.details(userId);
        // this.setState({user: response.data});

        // alert("title : " + task.title + "\ncompleted : " + task.completed + "\nuserId : " + task.userId +
        //     "\nnameuser : " + user.name);
    }

    async handleModif(){
        let {task} = this.state;
        this.props.history.push(`/taches/${task.id}/modifier`);
    }

    async handleDelete(){
        let {task} = this.state;
        await TaskService.delete(task.id);
        this.props.history.push('/taches');
    }

    render() {
        let {task} = this.state;
        return <div className="container">
            <h1>Tâche - {task.title}</h1>
            <p>Etat : {task.completed === false ? "En cours" : "Terminée"}</p>
            <button className="btn btn-warning" onClick={() => this.handleModif()}>Modifier</button>
            <button className="btn btn-danger mx-2" onClick={() => this.handleDelete()}>Supprimer</button>
        </div>
    }
}
