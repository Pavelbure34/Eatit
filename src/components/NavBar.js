import React from 'react';
import {NavLink as Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import {Icon} from '.';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';

const NavBar = (props)=>{
    const {name, family_name} = props;

    const {Brand, Toggle, Collapse} = Navbar;
    return (
        <Navbar fixed="bottom" id="top-nav-bar" expand="xl">
            <Brand id="top-nav-bar-brand">
                <Icon icon={faUserCircle} size="1x" color="#FFFFFF"/>
                <b><p>{name} {family_name}</p></b>
            </Brand>
            <Toggle aria-controls="basic-navbar-nav" className="top-nav-bar-toggle"/>
            <Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Toggle aria-controls="basic-navbar-nav" className="top-nav-bar-toggle"/>
                    <Link to="/home" className="nav-link">Home</Link>
                    <Link to="/userprofile" className="nav-link">User Profile</Link>
                    <Link to="/myorders" className="nav-link">My Order(s)</Link>
                    <Link to="/changepassword" className="nav-link">Change Password</Link>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export {NavBar};
