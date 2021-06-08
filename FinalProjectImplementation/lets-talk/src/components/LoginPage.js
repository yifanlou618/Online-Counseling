import React, { Component } from 'react';
import './LoginPage.css';

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    validate = () => {
        var valid = false;
        if (this.state.username === "user" && this.state.password === "user") {
            valid = true;
        } else {
            valid = false;
        }
        return valid;
    };

    displayAlert = () => {
        if (this.state.username.length === 0 || this.state.password.length === 0) {
            alert("Username/Password can't be empty!");
            window.location.reload();
        } else {
            const valid = this.validate();
            if (valid === true) {
                alert("You have successfully logged in.");
                window.location = '/';
            } else {
                alert("Invalid username and/or password!");
                window.location.reload();
            }
        }
    };

    render() {
        return (
            <div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Login</title>
                <link rel="stylesheet" href="LoginPage.css" />
                <main id="login-main-holder">
                    <h1 id="login-header">Please Login</h1>
                    <form id="login-form">
                        <input type="text" name="username" value={this.state.username} id="username-field" className="login-form-field" onChange={this.handleChange} placeholder="Username" />
                        <input type="password" name="password" value={this.state.password} id="password-field" className="login-form-field" onChange={this.handleChange} placeholder="Password" />
                        <input type="button" defaultValue="Login" id="login-form-submit" onClick={this.displayAlert} />
                        <span style={{ marginTop: '6px' }}>
                            <div>
                                <span style={{ margin: '5px' }}>
                                    <input type="checkbox" name="remember" id="remember-field" className="login-form-field" />
                                </span>
                                <label for="remember">Remember Username</label>
                            </div>
                        </span>
                        <span style={{ marginTop: '-8px' }}>
                            <div>
                                <span style={{ margin: '5px' }}>
                                    <input type="checkbox" name="remember" id="remember-field" className="login-form-field" />
                                </span>
                                <label for="remember">Stay signed in</label>
                            </div>
                        </span>
                        <span style={{ fontSize: '14px', marginTop: '-7px' }}><a href='signup'>Create account</a></span>
                        <span style={{ fontSize: '14px' }}><a href='reset'>Forget Password?</a></span>
                        <span style={{ fontSize: '14px', marginTop: '3px' }}><a href='/'><input type="button" defaultValue="Home Page" id="login-form-submit" /></a></span>
                    </form>
                </main>
            </div>
        )
    }
}

export default LoginPage;