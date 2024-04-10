import Card from 'react-bootstrap/Card';
import '../assets/styles/Styledish.css';
import { Link } from 'react-router-dom';


const Dish = ({ name, price, image, slug }) => {
    return (
        <Link to={`/tacos/${slug}`}>
            <Card id='Card'>
                <Card.Img src={image} />
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
