import React, { Component } from 'react';
import { Form, Icon, Input, Button, Layout } from 'antd';
import axios from 'axios';
import '../css/login.css'
const { Content } = Layout;


class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            confirmUsername: '1234',
            confirmPassword: '1234',
        };

    }

    updateInput(key, value) {
        this.setState({
            [key]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const { username, password } = this.state;
    
        axios.post('/api/auth/login', { username, password })
          .then((result) => {
            localStorage.setItem('jwtToken', result.data.token);
            this.setState({ message: '' });
            this.props.history.push('/issue')
          })
          .catch((error) => {
            if(error.response.status === 401) {
              this.setState({ message: 'Login failed. Username or password not match' });
            }
          });
    }

    // handleSubmit = event => {
    //     console.log("hello");
    //     event.preventDefault();
    //     const { password, confirmPassword, username, confirmUsername } = this.state;
    //     if (password !== confirmPassword || username !== confirmUsername) {
    //         alert("Invalid credentials");
    //     } else {
    //         this.redirecthomepage()
    //     }
    // }

    // redirecthomepage() {
    //     this.props.history.push('/issue')
    // }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    render() {
        return (
            <div className="Login">
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            <Input
                                type="username"
                                value={this.state.username}
                                onChange={e => this.updateInput("username", e.target.value)}
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                type="password"
                                value={this.state.password}
                                onChange={e => this.updateInput("password", e.target.value)}
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                value="Log In"
                                className="login-form-button"
                                disabled={!this.validateForm()}
                            > Login </Button>
                        </Form.Item>
                    </Form>
                </Content>
            </div>
        );
    }
}


export default Login;