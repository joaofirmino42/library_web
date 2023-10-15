import React from 'react';
import BookForm from '../components/forms/BookForm';
const RegisterPage = () => (
    <div className="row">
        <div className="col-md-8 offset-md-2">
            <div className="card">
                <div className="card-body">
                    <h5 class="card-title">Make your User Account</h5>
                    <p class="card-text">Register your Book
                    </p>
                    <BookForm />
                </div>
            </div>
        </div>
    </div>
)
export default RegisterPage;