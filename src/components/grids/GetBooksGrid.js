import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import * as BooksService from '../../services/bookServices';
import * as BookRentService from '../../services/BookRentService';
import * as authHelpers from '../../helpers/auth-helpers';
//declaring the component as a function
export default function GetUsersGrid() {
    //variables
    const [books, setBooks] = useState([]); // (array)
    const [succcessMessage, setSuccessMessage] = useState(''); //text

    const getBooks = () => {

        BooksService.Get()
            .then(
                result => {
                    setBooks(result);
                }
            )
            .catch(
                e => {
                    console.log(e);
                }
            )
    }
    const deleteBook = (IdBook) => {
        if (window.confirm('Do you really want to delete the selected book? ')) {
            //accessing the API deletion service
            BooksService.Delete(IdBook)
                .then(
                    result => {
                        setSuccessMessage(result.message);
                        getBooks();
                    }
                )
                .catch(
                    e => {
                        console.log(e);
                    }
                )
        }
    }
    const rentBook = (id_user, IdBook) => {

        //accessing the API rent service
        BookRentService.postRegister(id_user, IdBook)
            .then(
                result => {
                    setSuccessMessage(result.message);
                    getBooks();
                }
            )
            .catch(
                e => {
                    console.log(e);
                }
            )

    }
    useEffect(
        () => {
            getBooks();
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
                        <th>Title</th>
                        <th>Unit</th>

                        <th width="160">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(
                            function (book, i) {
                                return (
                                    <tr key={i}>
                                        <td>{book.BookId}</td>
                                        <td>{book.title}</td>
                                        <td>{book.unit}</td>

                                        <td>
                                            <a className="btn btn- primary btn-sm"
                                                href="#"
                                                onClick={
                                                    () => window.location.href = "/update-books?id="
                                                        + book.BookId
                                                }>
                                                Update Books
                                            </a>
                                            <a className="btn btn- primary btn-sm"
                                                href="#"
                                                onClick={
                                                    () => rentBook(authHelpers.getIdUsuario(), book.BookId)
                                                }>
                                                Rent this Book
                                            </a>
                                            &nbsp;
                                            <a href="#" className="btn btn- danger btn-sm"
                                                onClick={
                                                    () =>
                                                        deleteBook
                                                            (book.BookId)
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
                            Number of Books: {books.length}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
