import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService'
import {Link} from 'react-router-dom'


class ProfileComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.submitClicked = this.submitClicked.bind(this)
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


    submitClicked() {
       
            
        //console.log(this.state)
    }


    render() {
        return (
             <div className="auth-wrapper">
                <h1>Set Up Profile</h1>
                <div className="auth-inner">
                <div className="form-group">
                        <label>Email:</label>
                        <br />
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>First Name:</label>
                        <br />
                        <input type="text" name="username" value={this.state.firstname} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <br />
                        <input type="text" name="userrole" value={this.state.lastname} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Change Password:</label>
                        <br />
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Re-Enter Password:</label>
                        <br />
                        <input type="password-confirm" name="password-confirm" value={this.state.passwordConfirm} onChange={this.handleChange}/>
                    </div>
                    <button className="btn btn-success" onClick={this.submitClicked}>Submit</button>
                </div>
           </div>
        )
    }
}

export default ProfileComponent