import React from 'react'
import {Link} from 'react-router-dom'

function ApplicantCard(props){
    return (
        <div className="border mb-4 rounded overflow-hidden">
            <Link to={`/applicants/${props.applicant.id}`}>
                <div 
                    style={{
                        'backgroundImage': `url('${props.applicant.images[0].imageUrl}')`,
                    }}
                    className="w-full h-64 bg-blue bg-cover"
                >
                </div>
            </Link>
            <div className="p-3">
                <h3 className="font-bold text-xl mb-3">
                    <Link to={`/applicants/${props.applicant.id}`}>
                        { props.applicant.name }
                    </Link>    
                </h3>
                <div className="font-bold mb-3">
                    $ { props.applicant.price }
                </div>
                <div className="mb-3">
                    { props.applicant.description }
                </div>
                <Link 
                    to={`/applicants/${props.applicant.id}`}
                    className="bg-blue-500 text-white p-2 flex justify-center w-full">
                    View 
                </Link>
            </div>
        </div>
    )
}

export default ApplicantCard