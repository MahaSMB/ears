import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { Rating, RatingView } from 'react-simple-star-rating'

function ApplicantCard(props){
    const [rating, setRating] = useState(0) 

    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
      }
    return (
        <div className="border mb-4 rounded overflow-hidden">
            <Link to="/applicant">
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
                    <Link to="/applicant">
                        Serafina Pekkala
                    </Link>    
                </h3>
                <div className="font-bold mb-3">
                    Mathematics
                </div>
                <div className="font-bold mb-3">
                    Assistant Professor
                </div>
                <div className='App'>
      <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
    </div>
                <div className="mb-3">
                    {/* props.applicant.description */}
                </div>
                <Link 
                    to="/applicant"
                    className="bg-blue-500 text-white p-2 flex justify-center w-full">
                    View 
                </Link>
            </div>
        </div>


        // <div className="border mb-4 rounded overflow-hidden">
        //     <Link to={`/applicant/${props.applicant.id}`}>
        //         <div 
        //             style={{
        //                 'backgroundImage': `url('${props.applicant.images[0].imageUrl}')`,
        //             }}
        //             className="w-full h-64 bg-blue bg-cover"
        //         >
        //         </div>
        //     </Link>
        //     <div className="p-3">
        //         <h3 className="font-bold text-xl mb-3">
        //             <Link to={`/applicant/${props.applicant.id}`}>
        //                 { props.applicant.name }
        //             </Link>    
        //         </h3>
        //         <div className="font-bold mb-3">
        //             $ { props.applicant.price }
        //         </div>
        //         <div className="mb-3">
        //             { props.applicant.description }
        //         </div>
        //         <Link 
        //             to={`/applicant/${props.applicant.id}`}
        //             className="bg-blue-500 text-white p-2 flex justify-center w-full">
        //             View 
        //         </Link>
        //     </div>
        // </div>
    )
}

export default ApplicantCard