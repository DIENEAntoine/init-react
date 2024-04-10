import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/styles/styleheader.css';
import logo from '../assets/images/logo.webp';

const Header = () => {
    return (
        <div className='header'>
        
            <Navbar className='bg-body-tertiary'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src={logo}
                        className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Nav.Link href="#home" className='d-flex flex-end'>Accueil</Nav.Link>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;



