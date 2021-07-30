import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import { Button, Card, Container, Row, col } from "react-bootstrap";
import axios from 'axios'
import ApplicantCard from './ApplicantCard'

const api = axios.create({
    baseURL: 'http://localhost:8080/api/app/get/jobs'
})


let content = null



class WelcomeComponent extends Component {

    state = {
        jobs: []
    }




    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        api.get('/').then( res => {
                console.log(res.data)
                this.setState({ jobs : res.data})
        })
    }

    handleClick = () => {
        this.props.history.push("/addJob");
    }
   
    content = 
    this.state.jobs.map((job) => 
        <div key={job.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
            <ApplicantCard applicant={job}/>
        </div>
    )

 
    render() {
        return <div>
            <h1>Welcome to EARS!</h1>
    
          
                <br/>
      

            <div className="d-grid gap-2">
                <Button onClick={this.handleClick} variant="primary" size="lg">
                Add a new job
                </Button>
             
            </div>

            <div className="mt-4">
                    <h1 className="font-bold text-2xl mb-3">
                        List of Jobs                
                    </h1>
                    
                    
        </div>

        {this.state.jobs.map( job =>
        <div className="border mb-4 rounded overflow-hidden">
            <Link to="/applicant">
                <div 
                    style={{
                        'backgroundImage': `url('')`,
                    }}
                    className="w-full h-64 bg-blue bg-cover"
                >
                </div>
            </Link>
            <div className="p-3">
                <h3 className="font-bold text-xl mb-3">
                    <Link to="/applicant">
                   Job Title: {job.jobTitle}
                    </Link>    
                </h3>
                <div className="font-bold mb-3">
                Department: <b>{job.department}</b>
                </div>
                <div className="font-bold mb-3">
                Experience Required: <b>{job.minimumExperienceRequired}</b> years
                </div>
                <div className='App'>

    </div>
                <div className="mb-3">
                    Skills Required: <b>{job.jobRequirements}</b>
                </div>
                <Link 
                    to="/applicant"
                    className="bg-blue-500 text-white p-2 flex justify-center w-full">
                    View 
                </Link>
            </div>
        </div>
  )}
        </div>
    }

    retrieveWelcomeMessage() {
        console.log('retrieve clicked');
    }
}

export default WelcomeComponent