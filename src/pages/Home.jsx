import React from 'react';
import Dish from '../components/Dish';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import "../assets/styles/home.css";



const Home = () => {

    const dishes = [
        {
            name: "Tacos à l’unit",
            image: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
            price: 3,
            slug: "tacos-a-lunite",
            isNew: true,
        },
        {
            name: "Enchiladas",
            image: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
            price: 12,
            slug: "enchiladas",
            isNew: false,
        },
        {
            name: "Mole poblano",
            image: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
            price: 15,
            slug: "mole-poblano",
            isNew: false,
        },
        
    ];

    const [showNewOnly, setShowNewOnly] = useState(false);

    const handleShowNewOnly = () => {
        setShowNewOnly(!showNewOnly);
    };

    const filteredDishes = showNewOnly ? dishes.filter(dish => dish.isNew) : dishes;
    
    return (
        <div className="home-page mt-5">
            <Container>
                <Button id='Show-btn' onClick={handleShowNewOnly}>
                    {showNewOnly ? "Voir tous les plats" : "Nouveautés uniquement"}
                </Button>
                <Row className="justify-content-start">
                    {filteredDishes.map(dish => (
                        <Col key={dish.slug} className='col-4'>
                            <Dish
                                name={dish.name}
                                image={dish.image}
                                price={dish.price}
                                isNew={dish.isNew}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Home;