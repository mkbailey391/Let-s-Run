import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/lib/Navbar'


export default ({ currentUser }) => {
    return(
        <nav className="nav clearfix">
            <div className="float-left">
                <Link className="nav-link" to="/">Let's Run</Link>
                <Link className="nav-link" to="/new">Create a Group</Link>
                <Link className="nav-link" to="/profile">Profile</Link>
            </div>
            <div className="float-right">
                {currentUser
                    ? (
                        <span>
                            <span className="nav-link">Welcome, {currentUser.name}</span>
                            <Link className="nav-link" to="/logout">Logout</Link>
                        </span>
                    )
                    : (
                        <span>
                            <Link className="nav-link" to="/login">Log In</Link>
                            <Link className="nav-link" to="/signup">Sign Up</Link>
                        </span>
                    )
                }
 
            </div>
        </nav>
    )
} 

{/* <Navbar bg="primary" variant="dark">
<Navbar.Brand href="#home">Navbar</Navbar.Brand>
<Nav className="mr-auto">
  <Nav.Link href="#home">Home</Nav.Link>
  <Nav.Link href="#features">Features</Nav.Link>
  <Nav.Link href="#pricing">Pricing</Nav.Link>
</Nav>
<Navbar/> */}