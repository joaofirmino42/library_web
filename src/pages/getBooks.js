import React from 'react';
import GetBooksGrid from '../components/grids/GetBooksGrid'
const GetBooks = () => (
    <div className="row">
        <div className="col-md-12">
            <div className="card">
                <div className="card-body">
                    <div>
                        <h5 className="card-title">
                        Book consultation
                        </h5>
                        <p className="card-text">
                        List of registered books:
                        </p>

                        <GetBooksGrid />
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default GetBooks;