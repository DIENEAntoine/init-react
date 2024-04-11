import React, { useState, useEffect } from 'react';
import Dish from '../components/Dish';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import DishesData from '../datas/Dishes.json';

const Home = () => {
    const [dishes, setDishes] = useState([]);
    const [showNewOnly, setShowNewOnly] = useState(false);

    const handleShowNewOnly = () => {
        setShowNewOnly(!showNewOnly);
    };

    useEffect(() => {
        const filteredDishes = showNewOnly ? DishesData.filter(dish => dish.isNew) : DishesData;
        setDishes(filteredDishes);
    }, [showNewOnly]);

    return (
        <div className="home-page mt-5">
            <Container>
                <Button className='mb-3' onClick={handleShowNewOnly}>
                    {showNewOnly ? "Voir tous les plats" : "Nouveautés uniquement"}
                </Button>
                <Row className="justify-content-start">
                    {dishes.map(dish => (
                        <Col key={dish.slug} className='col-4'>
                            <Dish
                                name={dish.name}
                                image={dish.image}
                                price={dish.price}
                                isNew={dish.isNew}
                                slug={dish.slug}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Home;