import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/styles/styleheader.css';
import logo from '../assets/images/logo.webp';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <Navbar className='bg-body-tertiary'>
                <Container>
                    <NavLink to="/" className="navbar-brand">
                        <img
                        alt="Logo"
                        src={logo}
                        className="d-inline-block align-top"
                        />
                    </NavLink>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <NavLink to="/" className="nav-link">Accueil</NavLink>
                            <NavLink to="/a-propos" className="nav-link">A propos</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};



export default Header;

