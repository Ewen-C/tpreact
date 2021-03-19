import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Accueil from "./views/Accueil";

import Header from "./components/Header";
import Footer from "./components/Footer";

import TasksList from "./views/Tasks/TasksList";
import TaskAdd from "./views/Tasks/TaskAdd";
import TaskDetails from "./views/Tasks/TaskDetails";
import TaskUpdate from "./views/Tasks/TaskUpdate";

import UserList from "./views/Users/UserList";
import UserDetails from "./views/Users/UserDetails";
import UserAdd from "./views/Users/UserAdd";

export default class App extends Component{

    render() {
        return <BrowserRouter>
            <Header/>

            <Switch>
                <Route exact path="/" component={Accueil} />

                <Route exact path="/taches" component={TasksList} />
                <Route exact path="/taches/ajout" component={TaskAdd} />
                <Route exact path="/taches/:id" component={TaskDetails} />
                <Route exact path="/taches/:id/modifier" component={TaskUpdate} />

                <Route exact path="/utilisateurs" component={UserList}/>
                <Route exact path="/utilisateurs/ajouter" component={UserAdd}/>
                <Route exact path="/utilisateurs/:id" component={UserDetails}/>
            </Switch>

            <Footer/>
        </BrowserRouter>
    }
}
