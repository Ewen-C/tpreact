import React, {Component} from 'react';
import TaskService from "../../services/task.service";

export default class TaskAdd extends Component{

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            completed: null,
        }
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value // Modification du state
        });
    }

    async handleSubmit(e){
        e.preventDefault();
        let {title, body, completed} = this.state;

        let data = {
            title: title,
            completed: completed,
            userId: 2 // ID fixe
        }

        alert("title : " + data.title + "\ncompleted : " + data.completed + "\nuserId : " + data.userId);

        await TaskService.create(data);
        this.props.history.push('/taches'); // Retour après ajout
    }

    render() {
        return <div className="container mt-3">
            <h1>Ajouter une tâche</h1>

            <form onSubmit={(event) => this.handleSubmit(event)}>

                <div className="form-group">
                    <label>Intitulé de la tâche</label>
                    <textarea name="title" rows="3" className="form-control" required
                        onChange={(event) => this.handleChange(event)}/>
                </div>

                <p>État de la tâche :</p>
                <div className="form-check">
                   <input className="form-check-input" type="radio" name="completed" 
                   value="0" required onChange={(event) => this.handleChange(event)}/>
                   <label className="form-check-label">En cours</label>
                </div>
                <div className="form-check">
                   <input className="form-check-input" type="radio" name="completed" 
                   value="1" required onChange={(event) => this.handleChange(event)}/>
                   <label className="form-check-label">Terminée</label>
                </div>

                <div className="form-group">
                    <label>(ID User : 2)</label>
                </div>
                
                <button type="submit" className="btn btn-primary mt-3">Ajouter</button>
            </form>
        </div>
    }

}
