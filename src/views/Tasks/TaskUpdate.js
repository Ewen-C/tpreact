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
            [e.target.id]: e.target.value
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
                    <input type="text" className="form-control" id="title" required value={title} onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className="form-group">
                    <label>État de la tâche</label>
                    <div class="form-check">
                         <label class="form-check-label"></label>
                         <input type="radio" class="form-check-input" required onChange={(e) => this.handleChange(e)}/>En cours
                    </div>
                    <div class="form-check">
                        <label class="form-check-label"></label>
                        <input type="radio" class="form-check-input" required onChange={(e) => this.handleChange(e)}/>Terminée
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Modifier</button>
            </form>


        </div>
    }
}
