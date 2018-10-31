import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

export default ({ currentUser }) => {
   return (
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
           <Navbar.Brand as={Link} to="/">Let's Run</Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="mr-auto">
               <Nav.Link href="/new">Create Group</Nav.Link>
               <Nav.Link href="/profile">Profile</Nav.Link>
           </Nav>
           {currentUser
               ? (
                   <Nav>
                       <Navbar.Brand>Welcome {currentUser.name}</Navbar.Brand>
                       <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                   </Nav>
               )
               : (
                   <Nav>
                       <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                       <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                   </Nav>
               )
           }
           </Navbar.Collapse>
     </Navbar>
   )
}
//        <nav className="nav clearfix">
//            <div className="float-left">
//                <Link className="nav-link" to="/">Let's Run</Link>
//                <Link className="nav-link" to="/new">Create a Group</Link>
//                <Link className="nav-link" to="/profile">Profile</Link>
//            </div>
//            <div className="float-right">
//                {currentUser
//                    ? (
//                        <span>
//                            <span className="nav-link">Welcome, {currentUser.name}</span>
//                            <Link className="nav-link" to="/logout">Logout</Link>
//                        </span>
//                    )
//                    : (
//                        <span>
//                            <Link className="nav-link" to="/login">Log In</Link>
//                            <Link className="nav-link" to="/signup">Sign Up</Link>
//                        </span>
//                    )
//                }

//            </div>
//        </nav>

