import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService'



export default class ForgotComponent extends Component {

    handleSubmit = e => {
        e.preventDefault()

        const data = {
            email: this.email
        }
    }
   
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Forgot Password</h1>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <label>Email:</label>
                        <input type="email" name="email" onChange={this.handleChange}/>
                    
                    <button className="btn btn-success" onClick={this.loginClicked}>Submit</button>
                    </div>
                </div>
           </form>
        )
    }
}

