import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService'
import {Link} from 'react-router-dom'


class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
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

    // handleUsernameChange(event) {
    //     console.log(event.target.name);
    //     this.setState(
    //         {
    //             [event.target.name]
    //                 : event.target.value
    //         }
    //     )
    // }

    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({password: event.target.value})
    // }
    loginClicked() {
        //Credentials: in28minutes,dummy
        if(this.state.username==='in28minutes' && this.state.password==='dummy'){
            AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({showSuccessMessage: true})
            // this.setState({hasLoginFailed: false})

        }
            
        else {
            console.log('Failed')
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        }
            
        //console.log(this.state)
    }


    render() {
        return (
             <div className="auth-wrapper">
                <h1>Login</h1>
                <div className="auth-inner">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successfull</div>}
                    {/*<ShowLoginSuccessfulMessage showSuccessMessage={this.state.showSuccessMessage} />*/}
                    <div className="form-group">
                        <label>User Name:</label>
                        <br />
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <br />
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/></div>
                    <button className="btn btn" onClick={this.loginClicked}>Login</button>                   
                    <p className="forgot-password">
                        <Link to={'/forgot'}>Forgot password?</Link>
                    </p>
                </div>
           </div>
        )
    }
}

export default LoginComponent