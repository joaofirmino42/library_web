import React, { useState } from 'react';
import * as bookServices from '../../services/bookServices';
export default function BookForm() {

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

    const onSubmit = () => {
        bookServices.postRegister(data)
            .then( //successs callback 
                result => {
                    setSuccessMessage(result.message);
                    reset({
                        title: '',
                        unit: '',


                    });
                }
            )
            .catch( //error callback  
                e => {
                    switch (e.response.status) {
                        case 400:
                            setErrorMessage('Filling Error! ');
                            break;
                        case 422:
                            setErrorMessage('Invalid book! ' + e.response.data);
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
                    <strong>Success!</strong> {successMessage}
                </div>
            }
            {
                Errormessage && <div className='alert alert-danger'>
                    <strong>Erro!</strong> {Errormessage}
                </div>
            }
            <div className='row mb-3'>
                <div className='col-md-6'>
                    <label>Book Name:</label>
                    <Controller
                        control={control}
                        name="title"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    type="text"
                                    placeholder='Ex:Lord of The Rings'
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
                    <label>Book Unit:</label>
                    <Controller
                        control={control}
                        name="unit"
                        defaultValue=""
                        render={
                            ({ field: { onChange, onBlur, value } }) => (
                                <input
                                    type="text"
                                    placeholder='10.0'
                                    className='form-control'
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )
                        }
                    />
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
