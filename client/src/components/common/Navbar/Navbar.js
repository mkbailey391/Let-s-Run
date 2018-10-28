import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default ({ currentUser }) => {
    return (
        <nav className="nav clearfix">
            <div className="float-left">
                <span className="nav-link"></span>
                <Link className="nav-link" to="/">Home</Link>
            </div>
            
        </nav>
    )
};