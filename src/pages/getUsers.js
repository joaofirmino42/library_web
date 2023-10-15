import React from 'react';
import GetUsersGrid from '../components/grids/GetUsersGrid'
const GetUsers = () => (
    <div className="row">
        <div className="col-md-12">
            <div className="card">
                <div className="card-body">
                    <div>
                        <h5 className="card-title">
                            Users Consultation
                        </h5>
                        <p className="card-text">
                            List of registered users:
                        </p>

                        <GetUsersGrid />
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default GetUsers;