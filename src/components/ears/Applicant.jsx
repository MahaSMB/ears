import React, {Component} from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'

class Applicant extends Component{
render() {   

    return (
        
        <div className="container mx-auto">
            <div className="auth-wrapper" >
                <h1>Applicant</h1>
                <div className="auth-inner2" >
                <div className="form-control">
                        <label>First Name</label>
                        <br />
                        <input type="text" name="firstname" size="50" />
                    </div>
                    <div className="form-control">
                        <label>Last Name</label>
                        <br />
                        <input type="text" name="lastname" size="50"/>
                    </div>
                <div className="form-control">
                        <label>Email</label>
                        <br />
                        <input type="email" name="email" size="50"/>
                    </div>    
                <div className="form-control">
                        <label>Phone Number</label>
                        <br />
                        <input type="tel" name="phoneNumber" size="50"/>
                </div>  
                <div className="form-control">
                        <label>Education</label>
                        <br />
                        <input type="text" name="education" size="50"/>
                </div>  
                <div className="form-control">
                        <label>Years of Experience</label>
                        <br />
                        <input type="text" name="experience" size="50"/>
                </div>    
                <div className="form-control">
                        <label>Skills</label>
                        <br />
                        <input type="text" name="skills" size="100" />
                </div> 
                <div className="form-control">
                        <label>Date of Application</label>
                        <br />
                        <input type="date" name="dateOfApplication" />
                </div>  
                <div className="form-control">
                        <label>Location</label>
                        <br />
                        <input type="text" name="location" size="50"/>
                </div> 
                <div className="form-control">
                        <label>Job Type</label>
                        <br />
                        <input type="checkbox" name="jobType" />
                        <label2 for="jobType1"> Full Time</label2>
                        <br />

                        <input type="checkbox" name="jobType" />
                        <label2 for="jobType2"> Part Time</label2>
                        <br />

                        <input type="checkbox" name="jobType" />
                        <label2 for="jobType3"> Hourly</label2>
                        <br />

                        <input type="checkbox" name="jobType" />
                        <label2 for="jobType4"> Contract</label2>
                        <br />
                </div>  
                <div className="form-control">
                        <label>Download Resume</label>
                        <br />
                        <input type="file" name="resume" />
                </div>
                <div className="form-control">
                        <label>Comments/Feedback</label>
                        <br />
                        <textarea id="comments" name="comments" rows="6" cols="100"></textarea>
                </div> 
                <div className="form-control">
                        <label>Decision</label>
                        <br />
                        <input type="radio" id="decision1" name="approved" value="approved"/>
                        <label2 for="decision1"> Approved</label2>
                        <br />
                        <input type="radio" id="decision2" name="rejected" value="rejected"/>
                        <label2 for="decision2"> Rejected</label2>
                        <br />
                        <input type="radio" id="decision3" name="notDecided" value="notDecided"/>
                        <label2 for="decision3"> Not Decided</label2>
                </div>        
                <div className="form-control">
                        <label>Department</label>
                        <br />
                        <input type="radio" id="department1" name="department" value="Mathematics"/>
                        <label2 for="department1"> Mathematics</label2>
                        <br />
                        <input type="radio" id="department2" name="department" value="ComputerScience"/>
                        <label2 for="department2"> Computer Science</label2>
                </div>     
                    <button className="btn btn" onClick={this.submitClicked}>Submit</button>
                </div>
           </div>
        </div>
        
    )
}
}

export default Applicant