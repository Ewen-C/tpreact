import React, {Component} from 'react';
import TaskService from "../../services/task.service";

export default class TaskAdd extends Component{

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            body: null
        }
    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value // Modification du state
        });
    }

    async handleSubmit(e){
        e.preventDefault();
        let {title, body} = this.state;

        let data = {
            title: title,
            body: body,
            userId: 2 // ID fixe
        }

        alert("title : " + data.title + "\nbody : " + data.body + "\nuserId : " + data.userId);

        await TaskService.create(data);
        this.props.history.push('/taches'); // Retour après ajout
    }

    render() {
        return <div className="container mt-3">
            <h1>Ajouter une tâche</h1>

            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group mt-3">
                    <label>Titre</label>
                    <input type="text" id="title" className="form-control" required
                        onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label>Contenu</label>
                    <textarea id="body" rows="5" className="form-control" required
                        onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label>(ID User : 2)</label>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Ajouter</button>
            </form>
        </div>
    }

}
