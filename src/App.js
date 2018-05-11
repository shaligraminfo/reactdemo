import React, {Component} from 'react';
//import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import UserDetail from './userDetails';
import Home from './Home';

class App extends React.Component {
    render() {

        return (
            <Router>
                <div class="container">
                        <h2 class="text-info">Github Users Portal</h2>
                    <hr/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/:userName" component={UserDetail}/>
                </div>

            </Router>

        );
    }
}

export default App;
