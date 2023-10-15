import React from 'react';
import { NavLink } from 'react-router-dom';
import * as authHelpers from '../helpers/auth-helpers';
export default function Header() {
    const logout = () => {
        if (window.confirm('Do you really want to log out of the system?')) {
            authHelpers.signOut();
            window.location.href = "/";
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg
     navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Book Control
                    </a>
                    <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse" data-bs-
                        target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active"
                                    aria-current="page" to="/">
                                    Access acount
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"
                                    to="/create-account">
                                    Create user account
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"
                                    to="/forgot-password">
                                    Forgot my Password
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"
                                    to="/get-users">
                                    Get Users
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"
                                    to="/get-books">
                                    Get Books
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}