import React, {Component} from 'react'

class ManageUser extends Component {
    render() {
       
        return (
        <>
            <h1 className="font-bold text-2xl mb-3">
                Manage Users                
            </h1>
            <input type="button" value="Add New User" className="right" />

            <div className="container mx-auto">
            <div className="auth-wrapper" >
                <div className="auth-inner2" >
                    <div className="form-control">
                        <br />
                        <div className="flex-box-1">Faculty 1</div>
                        <div className="flex-box-2">
                            <input type="button" value="Edit Role" className="right" />
                            <input type="button" value="Delete" className="right" />
                        </div>

                    </div>
                    <div className="form-control">
                        <br />
                        <div className="flex-box-1">ChairPerson 1</div>
                        <div className="flex-box-2">
                            <input type="button" value="Edit Role" className="right" />
                            <input type="button" value="Delete" className="right" />
                        </div>

                    </div>
                    <div className="form-control">
                        <br />
                        <div className="flex-box-1">Data Entry Operator</div>
                        <div className="flex-box-2">
                            <input type="button" value="Edit Role" className="right" />
                            <input type="button" value="Delete" className="right" />
                        </div>

                    </div>
                    <div className="form-control">
                        <br />
                        <div className="flex-box-1">Faculty 2</div>
                        <div className="flex-box-2">
                            <input type="button" value="Edit Role" className="right" />
                            <input type="button" value="Delete" className="right" />
                        </div>

                    </div>
   
                </div>
            </div>
            </div>        
        </>
        )
    }


}

export default ManageUser