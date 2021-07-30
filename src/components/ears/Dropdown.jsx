import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'


function Dropdown() {
  return (
    <div>
    <Nav>
        <NavDropdown title="Home">
            <NavDropdown.Item href="/welcome/:name">Home</NavDropdown.Item>
            <NavDropdown.Item href="/listApplicants">List of Applicants</NavDropdown.Item>
            <NavDropdown.Item href="/manageUser">Manage User</NavDropdown.Item>
            <NavDropdown.Item href="/register">Create A New Account/Register</NavDropdown.Item>
        </NavDropdown>
    </Nav>
       
   </div>
  )
}

export default Dropdown