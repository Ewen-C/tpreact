import React, {Component} from 'react';
import TaskService from "../../services/task.service";

export default class TaskUpdate extends Component{

    constructor(props) {
        super(props);
        this.state = {
            task: {},
            title: "",
            completed: ""
        }
    }

    async componentDidMount() {
        let {id} = this.props.match.params;
        let response = await TaskService.details(id);
        this.setState({
            task: response.data,
            title: response.data.title,
            completed: response.data.completed
        });
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async handleSubmit(e){
        e.preventDefault();
        let {task, title, completed} = this.state;

        let data = {
            title: title,
            completed: completed
        }

        await TaskService.update(task.id, data);
        this.props.history.push(`/taches/${task.id}`);
    }

    render() {
        let {task, title, completed} = this.state;
        return <div className="container mt-3">
            <h1>Modification de la tâche : </h1>
            <h2>{task.title}</h2>

            <form className="mt-3" onSubmit={(e) => this.handleSubmit(e)}>

                <div className="form-group">
                    <label>Intitulé de la tâche</label>
                    <input type="text" className="form-control" name="title" required 
                        value={title} onChange={(e) => this.handleChange(e)}/>
                </div>

                <p>État de la tâche :</p>
                <div className="form-check">
                   <input className="form-check-input" type="radio" name="completed" 
                   value={completed} required onChange={(event) => this.handleChange(event)}/>
                   <label className="form-check-label">En cours</label>
                </div>
                <div className="form-check">
                   <input className="form-check-input" type="radio" name="completed" 
                   value={completed} required onChange={(event) => this.handleChange(event)}/>
                   <label className="form-check-label">Terminée</label>
                </div>

                <button type="submit" className="btn btn-primary mt-3">Modifier</button>
            </form>


        </div>
    }
}
