import Card from 'react-bootstrap/Card';
import '../assets/styles/Styledish.css';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';


const Dish = ({ name, price, image, slug, isNew }) => {
    return (
        <Link to={`/tacos/${slug}`}>
            <Card id='Card'>
                <Card.Img src={image} />
                {isNew && ( 
                    <Badge bg="primary" id='new-badge'>Nouveau</Badge>
                )}
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    Prix : {price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>    
    );
};

export default Dish;
