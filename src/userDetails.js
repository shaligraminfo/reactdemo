import React, {Component} from 'react';

class UserDetail extends Component {
    constructor(props, e) {
        super(props)
        this.state = {
            user: []
        }
        console.log(props);
    }


    getuser() {
        var that = this;
        const userName = that.props.match.params.userName;

        fetch('https://api.github.com/users/' + userName).then(function (res) {
            return res.json();
        }).then(function (res) {
            console.log(res);
            that.setState({
                user: [res]
            });
            //console.log(that.state.user);
        });
    }

    componentDidMount() {
        this.getuser();
    }

    render() {
        return (
            <p class="lead">
                <h4>User Details</h4>

                {
                    this.state.user.map(u =>
                        <div class="font-weight-light row" key={u.id}>
                            <div class="col-md-6">
                                <span>Name : {u.login}</span><br/>
                                <span>Location : {u.location}</span>
                            </div>
                            <div className="col-md-6">
                                <img src={u.avatar_url} class="img-thumbnail w-50 rounded"/>
                            </div>
                            <a href="/">Back</a>
                        </div>
                    )
                }

            </p>
        );
    }
}

export default UserDetail;