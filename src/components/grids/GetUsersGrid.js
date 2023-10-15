import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import * as usersServices from '../../services/userService';
//declaring the component as a function
export default function GetUsersGrid() {
   //variables
    const [users, setUsers] = useState([]); //(array)
    const [succcessMessage, setSuccessMessage] = useState(''); //texto
    const getUsers = () => {

        usersServices.getRegister()
            .then(
                result => {
                    setUsers(result);
                }
            )
            .catch(
                e => {
                    console.log(e);
                }
            )
    }
    const deleteUser = (id_user) => {
        if (window.confirm('Do you really want to delete the selected user? ')) {
            //accessing the API deletion service
            usersServices.deleteRegister(id_user)
                .then(
                    result => {
                        setSuccessMessage(result.message);
                        getUsers();
                    }
                )
                .catch(
                    e => {
                        console.log(e);
                    }
                )
        }
    }

    useEffect(
        () => {
            getUsers();
        }, []
    )
    return (
        <div>
            {
                succcessMessage && <div className="alert alert-success">
                    <strong>Success!</strong> {succcessMessage}
                </div>
            }
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>

                        <th width="160">Operações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(
                            function (user, i) {
                                return (
                                    <tr key={i}>
                                        <td>{user.id_user}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>

                                        <td>
                                            <a className="btn btn-
                                              primary btn-sm"
                                                href="#"
                                                onClick={
                                                    () => window.location.href = "/update-user?id_user="
                                                        + user.id_user
                                                }>
                                                Update
                                            </a>
                                            &nbsp;
                                            <a className="btn btn-
                                              primary btn-sm"
                                                href="#"
                                                onClick={
                                                    () => window.location.href = "/rent-book?id_user="
                                                        + user.id_user
                                                }>
                                                Rent a Book
                                            </a>
                                            &nbsp;
                                            <a href="#" className="btn btn-
                                       danger btn-sm"
                                                onClick={
                                                    () =>
                                                        deleteUser
                                                            (user.id_user)
                                                }>Delete</a>
                                        </td>
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="6">
                        Number of Users: {users.length}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
