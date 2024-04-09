
const Dish = ({ name, price, image }) => {
    return (
        <div className="dish">
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>Prix : {price}</p>
        </div>
    );
};

export default Dish;