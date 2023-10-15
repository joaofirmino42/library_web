import React, { useState } from 'react';
import * as userServices from '../../services/userService';
import { useForm, Controller } from 'react-hook-form';
import textFieldValidation from '../../validations/textfield-validation';
import emailValidation from '../../validations/email-validation';
export default function RegisterForm() {

    const [successMessage, setSuccessMessage] = useState('');
    const [Errormessage, setErrorMessage] = useState('');

    const {
        control,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm();

    const onSubmit = (data) => {
        userServices.postRegister(data)
            .then( //successs callback 
                result => {
                    setSuccessMessage(result.message);
                    reset({
                        name: '',
                        email: '',
                        password: '',

                    });
                }
            )
            .catch( //error callback  

                e => {
                    switch (e.response.status) {
                        case 400:
                            setErrorMessage('Filling Error! ' + e.response.data.errors.SenhaConfirmacao[0]);
                            break;
                        case 422:
                            setErrorMessage('Invalid user! ' + e.response.data);
                            break;
                        default:
                            setErrorMessage('The operation could not be performed, please try again.');
                            break;
                    }
                }

            );
    }


    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            {
                successMessage && <div className='alert alert-success'>
                    <strong>Sucesso!</strong> {successMessage}
                </div>
            }
            {
                Errormessage && <div className='alert alert-danger'>
                    <strong>Erro!</strong> {Errormessage}
                </div>
            }

            <div className='row mb-3'>
                <div className='col-md-6'>
                    <label>User Name:</label>
                    <Controller
                        control={control}
                        name="name"
                        rules={{ validate: textFieldValidation }}
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    type="text"
                                    placeholder='Ex:John Lennon'
                                    className='form-control'
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }
                    />
                    {
                        errors.name && <div className='text-danger'>
                            {errors.name.message}
                        </div>
                    }
                </div>
                <div className='col-md-6'>
                    <label>Email de acesso:</label>
                    <Controller
                        control={control}
                        name="email"
                        rules={{ validate: emailValidation }}
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    type="email"
                                    placeholder
                                    ='Ex: joaocarlos@gmail.com'
                                    className='form-control'
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }
                    />
                    {
                        errors.email && <div className='text-danger'>
                            {errors.email.message}
                        </div>
                    }
                </div>
            </div>
            <div className='row mb-3'>
                <div className='col-md-6'>
                    <label>Senha de acesso:</label>
                    <Controller
                        control={control}
                        name="password"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    type="password"
                                    placeholder='fill here with your password'
                                    className='form-control'
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }
                    />
                    {
                        errors.password && <div className='text-danger'>
                            {errors.password.message}
                        </div>
                    }
                </div>


            </div>
            <div className='row mb-3'>
                <div className='col-md-12'>
                    <input type="submit" value="Add Acount"
                        className='btn btn-success' />
                </div>
            </div>
        </form>
    )
}
