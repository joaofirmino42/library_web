
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import emailValidation from '../../validations/email-validation';
import passwordValidation from '../../validations/password-validation';
import * as userServices from '../../services/userService';
import * as authHelpers from '../../helpers/auth-helpers';

//declaring the component as a function
export default function LoginForm() {


    //attributes (variables)..
    const [errorMessage, setErrorMessage] = useState('');
    //function to create the form
    //through REACT HOOK FORM
    const {
        control,   //capture form fields
        handleSubmit, //capture the SUBMIT event of the form
        formState: {
            errors //capture field validation errors
        },
        reset //clear the contents of the fields
    } = useForm();
    //function to capture the SUBMIT event of the form
    const onSubmit = (data) => {
        //clear success and error messages..
        setErrorMessage('');
        //making the call to the API authentication service..
        userServices.postLogin(data)
            .then(   //successful callback
                result => {
                    //record authenticated user data
                    //in the browser's local storage
                    authHelpers.signIn(result);
                    reset({
                        email: '',
                        password: ''
                    });
                    //redirect to user page
                    window.location.href = '/get-users';
                }
            )
            .catch( //error callback 
                e => {
                    setErrorMessage(e.response.data);
                }
            )
    }
    //render the component's HTML content
    return (

        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            {
                errorMessage && <div className="alert alert-danger">
                    <strong>Erro!</strong> {errorMessage}
                </div>
            }
            <div className="mb-3 text-start">
                <label>Email:</label>
                <Controller
                    control={control}
                    name="email"
                    defaultValue=""
                    rules={{ validate: emailValidation }}
                    render={
                        ({ field: { onChange, onBlur, value } }) => (
                            <input
                                id="email"
                                type="email"
                                className="form-control"
                                placeholder="email"
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                            />
                        )
                    }
                />
                {
                    errors.email && <div className="text-danger">
                        {errors.email.message}
                    </div>
                }
            </div>
            <div className="mb-3 text-start">
                <label>Password:</label>
                <Controller
                    control={control}
                    name="password"
                    defaultValue=""
                    rules={{ validate: passwordValidation }}
                    render={
                        ({ field: { onChange, onBlur, value } }) => (
                            <input
                                id="password"
                                type="password"
                                className="form-control"
                                placeholder="password"
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                            />
                        )
                    }
                />
                {
                    errors.senha && <div className="text-danger">
                        {errors.senha.message}
                    </div>
                }
            </div>
            <div className="d-grid mb-1">
                <input type="submit" value="Access Library"
                    className="btn btn-primary" />
            </div>
            <div className="d-grid mb-1">
                <NavLink className="btn btn-secondary" to="/create-account">
                    Create account.
                </NavLink>
            </div>
            <div className="d-grid mb-1">
                <NavLink className="btn btn-light"
                    to="/forgot-password">
                    Forgot my Password?
                </NavLink>
            </div>
        </form>
    )

}

