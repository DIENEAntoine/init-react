import React from 'react';
import Dish from '../components/Dish';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';



const Home = () => {

    const dishes = [
        {
            name: "Tacos à l’unit",
            image: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
            price: 3,
            slug: "tacos-a-lunite"
        },
        {
            name: "Enchiladas",
            image: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
            price: 12,
            slug: "enchiladas"
        },
        {
            name: "Mole poblano",
            image: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
            price: 15,
            slug: "mole-poblano"
        },
        
    ];

    return (
        <div className="home-page mt-5">
            <Container>
                <Row className="justify-content-center">
                    {dishes.map((dish, index) => (
                        <Col key={index}>
                            
                                <Dish 
                                    name={dish.name}
                                    image={dish.image}
                                    price={dish.price}
                                />
                            
                        </Col>
                    ))}   
                </Row>
            </Container>
        </div>
    );
};

export default Home;