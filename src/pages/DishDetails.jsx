import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'; 


const DishDetail = () => {
    const { slug } = useParams();
    return (
        <Container>
            <Row className='mt-5'>
                <Col>
                    <h1>Détails du plat : {slug}</h1>
                </Col>
            </Row>
        </Container>
        
        
    );
};



export default DishDetail;