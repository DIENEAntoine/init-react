import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'; 
import DishesData from '../datas/Dishes.json';
import Button from 'react-bootstrap/Button';


const DishDetail = () => {
    const { slug } = useParams();

    const [dish, setDish] = useState(null);
    
    useEffect(() => {
        const foundDish = DishesData.find(d => d.slug === slug);
        
        setDish(foundDish);
        
    }, [slug]);

    return (
        <Container>
        {dish ? (
            <Row className='mt-5'>
                <Col>
                    <img 
                        src = {dish.image}
                        alt = {dish.name}
                        className = "w-100 h-100"
                    />
                </Col>
                <Col>
                    <h1 className='mb-5'>{dish.name}</h1>
                    <p>{dish.description}</p>
                    <p>{dish.price}€</p>
                    <Button variant="primary">Commander</Button>
                </Col>
            </Row>
        ) : (
            <Row>
                <p>Plat introuvable pour le slug : {slug}</p>
            </Row>
        )}
        </Container>
    );
};



export default DishDetail;