import React, {Component} from 'react'
//import AuthenticationService from './AuthenticationService'
import {Link} from 'react-router-dom'
import { useAxiosGet } from '../Hooks/HttpRequests'
import Applicant from './Applicant'
import ApplicantCard from './ApplicantCard'
import Loader from './Loader'

function ListApplicantsComponent(){
    // Create your own Mock API: https://mockapi.io/
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`
    //const url = `https://60fea3bf25741100170786c7.mockapi.io/api/v1/applicant`
    let applicants = useAxiosGet(url)

    let content = null

    if(applicants.error){
        content = <div>
            <div className="bg-blue-300 mb-2 p-3">
                If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
            </div>
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

    if(applicants.loading){
        content = <Loader></Loader>
    }

    if(applicants.data){
        content = 
        applicants.data.map((applicant) => 
            <div key={applicant.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
                <ApplicantCard applicant={applicant}/>
            </div>
        )
    }

    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-2xl mb-3">
                List of Applicants                
            </h1>
            
            <div className="md:flex flex-wrap md:-mx-3">
                { content } 
            </div>
        </div>
    )
}

export default ListApplicantsComponent