import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/styles/styleheader.css';
import logo from '../assets/images/logo.webp';
import { useLocation } from 'react-router-dom';


const Header = () => {
    const location = useLocation();
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
                            <Nav.Link href="/" active={location.pathname === '/'}>Accueil</Nav.Link>
                            <Nav.Link href="/about" active={location.pathname === '/about'}>A propos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};



export default Header;

