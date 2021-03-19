import React, {Component} from 'react';
import {UserService} from "../../services/user.service";

export default class UserAdd extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null
        }
    }

    handleChange(e){
        this.setState({[e.target.id]: e.target.value});
    }

    async handleSubmit(e){
        e.preventDefault();
        let {name, email} = this.state;
        await UserService.create({name, email});
        this.props.history.push('/utilisateurs');
    }

    render() {
        return <div className="container">
            <h1>Ajouter un utilisateur</h1>

            <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" id="name" className="form-control" required
                        onChange={(e) => this.handleChange(e)}/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" id="email" className="form-control" required
                           onChange={(e) => this.handleChange(e)}/>
                </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>

        </div>
    }

}
