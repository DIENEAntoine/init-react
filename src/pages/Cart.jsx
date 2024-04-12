import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const Cart = ({ cart }) => {
    return (
        <Container>
            <Row className='mt-5'>
                <h1>Panier</h1>   
            </Row>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prix</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((cartItem) => (
                            <tr >
                                <td>{cartItem.name}</td>
                                <td>{cartItem.price}€</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
        
    );
};

export default Cart;