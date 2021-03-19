import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./views/Home";
import Header from "./components/Header";
import PostsList from "./views/Posts/PostsList";
import PostAdd from "./views/Posts/PostAdd";
import PostDetails from "./views/Posts/PostDetails";
import PostUpdate from "./views/Posts/PostUpdate";
import UserList from "./views/Users/UserList";
import UserDetails from "./views/Users/UserDetails";
import UserAdd from "./views/Users/UserAdd";

export default class App extends Component{

    render() {
        return <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/articles" component={PostsList} />
                <Route exact path="/articles/ajouter" component={PostAdd} />
                <Route exact path="/articles/:id" component={PostDetails} />
                <Route exact path="/articles/:id/modifier" component={PostUpdate} />

                <Route exact path="/utilisateurs" component={UserList}/>
                <Route exact path="/utilisateurs/ajouter" component={UserAdd}/>
                <Route exact path="/utilisateurs/:id" component={UserDetails}/>
            </Switch>
        </BrowserRouter>
    }
}
