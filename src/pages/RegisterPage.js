import React from 'react';
import RegisterForm from '../components/forms/RegisterForm';
const RegisterPage = () => (
    <div className="row">
        <div className="col-md-8 offset-md-2">
            <div className="card">
                <div className="card-body">
                    <h5 class="card-title">Make your User Account</h5>
                    <p class="card-text">Fill in the fields
                        below to create an access account.
                    </p>
                    <RegisterForm />
                </div>
            </div>
        </div>
    </div>
)
export default RegisterPage;