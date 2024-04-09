import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/styles/styleheader.css';

const Header = () => {
    return (
        <div className='header'>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png"
                        width="50"
                        height="50"
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



