import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/styles/styleheader.css';
import logo from '../assets/images/logo.webp';

const Header = () => {
    return (
        <header>
            <Navbar className='bg-body-tertiary'>
                <Container>
                    <Navbar.Brand href="/">
                        <img
                        alt="Logo"
                        src={logo}
                        className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link href="/">Accueil</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};



export default Header;

