import Card from 'react-bootstrap/Card';
import '../assets/styles/Styledish.css';

const Dish = ({ name, price, image }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    Prix : {price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        
    );
};

export default Dish;
