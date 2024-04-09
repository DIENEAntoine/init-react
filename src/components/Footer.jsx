import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container className='justify-content-center'>
                    <Navbar.Brand href="#home">Copyright Mexican Food 2024</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};


export default Footer;