import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <div className='header'>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                </Container>
            </Navbar>

            {/* 
            <img src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png" alt="Person" />
            <ul>
                <li><a href="/">Accueil</a></li>
            </ul> 
            */}
        </div>
    );
};

export default Header;



