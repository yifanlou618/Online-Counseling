import React, { Component } from 'react';
import './ResetPage.css';

class ResetPage extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            phone: '',
            username: '',
            temp_password: ''
        }
    }

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

    checkPassword = () => {
        var valid = false;
        if (this.state.temp_password.length === 0) {
            alert("Temporary password can't be empty!");
            valid = false;
            window.location.reload();
        } else {
            valid = true;
        }
        return valid;
    }

    checkValidation = () => {
        if (this.checkEmail() === true) {
            if (this.checkPhone() === true) {
                if (this.checkUsername() === true) {
                    if (this.checkPassword() === true) {
                        alert("Password reset info has been sent to your email.");
                        window.location = 'login';
                    }
                }
            }
        }
    };

    render() {
        return (
            <div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Reset Password</title>
                <link rel="stylesheet" href="ResetPage.css" />
                <main id="main-holder">
                    <h1 id="reset-header">Reset Password</h1>
                    <form id="reset-form">
                        <input type="text" name="email" value={this.state.email} id="email-field" className="reset-form-field" onChange={this.handleChange} placeholder="Email" required />
                        <input type="text" name="phone" value={this.state.phone} id="phone-field" className="reset-form-field" onChange={this.handleChange} placeholder="Phone" required />
                        <input type="text" name="username" value={this.state.username} id="username-field" className="reset-form-field" onChange={this.handleChange} placeholder="Username" required />
                        <input type="password" name="temp_password" value={this.state.temp_password} id="password-field" className="login-form-field" onChange={this.handleChange} placeholder="Temp Password" />
                        <input type="button" defaultValue="Reset" id="reset-form-submit" onClick={this.checkValidation} />
                        <a href='login'><span style={{ fontSize: '14px' }}>Login</span></a>
                        <a href='/'><span style={{ fontSize: '14px' }}>Home Page</span></a>
		            </form>
                </main>
            </div>
        )
    }
}

export default ResetPage;