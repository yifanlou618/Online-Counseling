import React, { Component } from 'react';
import './SignupPage.css';

class SignupPage extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            phone: '',
            username: '',
            password: '',
            repeat_password: '',
            showRules: false
        };
        this.showComponent = this.showComponent.bind(this);
    }

    showComponent = () => {
        this.setState({ showRules: !this.state.showRules })
    };

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    checkEmail = () => {
        var valid = false;
        if (!((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email)))) {
            alert("Please provide a valid email address!");
            valid = false;
            window.location.reload();
        } else {
            valid = true;
        }
        return valid;
    };

    checkPhone = () => {
        var valid = false;
        if (this.state.phone.length < 10) {
            alert("Please provide a valid phone number!");
            valid = false;
            window.location.reload();
        } else {
            valid = true;
        }
        return valid;
    };

    checkUsername = () => {
        var valid = false;
        if (this.state.username.length === 0) {
            alert("Username can't be empty!");
            valid = false;
            window.location.reload();
        } else if (!((/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(this.state.username)))) {
            alert("Invalid username, please try again.");
            valid = false;
            window.location.reload();
        } else {
            valid = true;
        }
        return valid;
    };

    checkRepeatPassword = () => {
        var valid = false;
        if (this.state.password.length === 0 || this.state.repeat_password.length === 0) {
            alert("Password can't be empty!");
            valid = false;
            window.location.reload();
        } else if (this.state.password !== this.state.repeat_password) {
            alert("Password does not match!");
            valid = false;
            window.location.reload();
        } else {
            valid = true;
        }
        return valid;
    };

    checkValidation = () => {
        if (this.checkEmail() === true) {
            if (this.checkPhone() === true) {
                if (this.checkUsername() === true) {
                    if (this.checkRepeatPassword() === true) {
                        alert("You have successfully signed up.");
                        window.location = 'login';
                    }
                }
            }
        }
    };

    displayRule = () => {
        return (
            <span style={{ textAlign: 'center' }}>
                <p>Only contains alphanumeric characters, underscore and dot.</p>
                <p><span style={{ color: 'white' }}>Underscore and dot can't be at the end or start of a username (e.g _username / username_ / .username / username.).</span></p>
                <p>Underscore and dot can't be next to each other (e.g user_.name).</p>
                <p>Underscore or dot can't be used multiple times in a row (e.g user__name / user..name).</p>
                <p>Number of characters must be between 8 to 20.</p>
            </span>
        )
    };

    render() {
        const { showRules } = this.state;
        return (
            <div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Sign Up</title>
                <link rel="stylesheet" href="SignupPage.css" />
                <main id="signup-main-holder">
                    <h1 id="signup-header">Sign Up</h1>
                    <form id="signup-form">
                        <input type="text" name="email" value={this.state.email} id="email-field" className="signup-form-field" onChange={this.handleChange} placeholder="Email" required />
                        <input type="text" name="phone" value={this.state.phone} id="phone-field" className="signup-form-field" onChange={this.handleChange} placeholder="Phone Number" required />
                        <input type="text" name="username" value={this.state.username} id="username-field" className="signup-form-field" onChange={this.handleChange} placeholder="Username" required />
                        <span style={{ fontSize: '14px', marginBottom: '10px' }}><input type="button" defaultValue="Username Rules" id="signup-form-submit" onClick={() => this.showComponent()}/></span>
                        <div>
                            {showRules ? this.displayRule() : null}
                        </div>
                        <input type="password" name="password" value={this.state.password} id="password-field" className="signup-form-field" onChange={this.handleChange} placeholder="Password" required />
                        <input type="password" name="repeat_password" value={this.state.repeat_password} id="repeat_password-field" className="signup-form-field" onChange={this.handleChange} placeholder="Repeat Password" required />
                        <div>
                            <input type="button" defaultValue="Sign Up" id="signup-form-submit" onClick={this.checkValidation} />
                        </div>
                        Already signed up? <a href='login'><span style={{ fontSize: '14px' }}>Login</span></a>
                        <a href='/'><span style={{ fontSize: '14px', color: 'white' }}>Home Page</span></a>
                    </form>
                </main>
            </div>
        )
    }
}

export default SignupPage;