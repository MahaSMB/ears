import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService'
import {Link} from 'react-router-dom'


class PostJobComponent extends Component {
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
                <h1>Post a Job</h1>
                <div className="auth-inner">
                <div className="form-group">
                        <label>Select Job Title:</label>
                        <br />
                        <select id = "dropdown" ref = {(input)=> this.menu = input}>
                           
                            <option value="Math_Instructor">Mathematics Instructor</option>
                            <option value="Computer_Instructor">Computer Science Instructor</option>
                     
                        </select>
                      
                    </div>
                    <div className="form-group">
                        <label>Select Department:</label>
                        <select id = "dropdown" ref = {(input)=> this.menu = input}>
                           
                           <option value="MATH">Mathematics</option>
                           <option value="COMPUTER_SCIENCE">Computer Science</option>
                    
                       </select>
                    </div>
                
                    <div className="form-group">
                        <label>Job Requirements:</label>
                        <br />
                        <input type="text" name="Job Requirements" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Enter Minimum Experience:</label>
                        <br />
                        <input type="text" name="password-confirm" value={this.state.passwordConfirm} onChange={this.handleChange}/>
                    </div>
                    <button className="btn btn-success" onClick={this.registerClicked}>Post</button>
                </div>
           </div>
        )
    }
}

export default PostJobComponent