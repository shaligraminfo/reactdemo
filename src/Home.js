import React, {Component} from 'react';
import UserDetail from "./userDetails";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
        console.log(props);
    }

    fetchFive() {
        var that = this;
        var firstFive = [];
        fetch('https://api.github.com/users')
            .then(function (res) {
                return res.json();
            }).then(function (res) {

            for (var i = 0; i < 5; i++) {
                firstFive.push(res[i]);
            }
            that.setState({
                users: firstFive,
            });

            console.log(that.state.users);

        });
    }

    componentWillMount() {

        this.fetchFive();
    }

    render() {

        return (

            <Router>
                <div>
                    <h2>Github Users List</h2>
                    <ul class="list-group">
                        {
                            this.state.users.map(user =>
                                <li class="list-group-item" key={user.id}><Link to={`/${user.login}`} target="_self">{user.login}</Link></li>
                            )}
                    </ul>
                    <Switch>

                        <Route path="/:userName" component={UserDetail}/>
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default Home;