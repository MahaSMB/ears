import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService'
import {Link} from 'react-router-dom'


class RegisterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.registerClicked = this.registerClicked.bind(this)
    }

    handleChange(event) {
        //console.log(this.state);
        this.setState(
            {
                [event.target.name]
                    :event.target.value
            }
        )
    }


    registerClicked() {
       
            
        //console.log(this.state)
    }


    render() {
        return (
             <div className="auth-wrapper">
                <h1>Create A New Account</h1>
                <div className="auth-inner">
                <div className="form-group">
                        <label>Enter Email:</label>
                        <br />
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Enter Username:</label>
                        <br />
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Enter User Role:</label>
                        <br />
                        <input type="text" name="userrole" value={this.state.userrole} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Enter Password:</label>
                        <br />
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Re-Enter Password:</label>
                        <br />
                        <input type="password-confirm" name="password-confirm" value={this.state.passwordConfirm} onChange={this.handleChange}/>
                    </div>
                    <button className="btn btn" onClick={this.registerClicked}>Register</button>
                </div>
           </div>
        )
    }
}

export default RegisterComponent