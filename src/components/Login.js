import React, { Component } from 'react';
// import { Router, Route, Switch } from 'react-router'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            confirmUsername: '1234',
            confirmPassword: '1234',
        };

        //this.handleChange = this.handleChange.bind(this);

    }

    updateInput(key, value) {
        this.setState({
            [key]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { password, confirmPassword, username, confirmUsername } = this.state;
        if (password !== confirmPassword || username !== confirmUsername) {
            alert("Invalid credentials");
        } else {
          this.redirecthomepage()
        }
    }

    redirecthomepage(){
      this.props.history.push('/issue')
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    render() {
        return (
            <div className="Login">
                Login
        <form onSubmit={this.handleSubmit}>
                    <label>User Name</label>
                    <input 
                        type="username"
                        value={this.state.username}
                        onChange={e => this.updateInput("username", e.target.value)} 
                    />

                    <label>Password</label>
                    <input 
                        type="password" 
                        value={this.state.password} 
                        onChange={e => this.updateInput("password", e.target.value)} 
                    />

                    <input 
                        type="submit" 
                        value="Log In" 
                        disabled={!this.validateForm()} 
                    />
                </form>
            </div>
        );
    }
}

export default Login;