import Card from 'react-bootstrap/Card';
import photoProduct from '../assets/Generic product.jpg';

import './styleComponent.css';

function CardComponent(props) {

    return (
        <Card className='card-ctm mt-3 ms-2 me-2'>
            <Card.Img className='card-img-ctm' variant="top" src={photoProduct} />
            <Card.Body className='card-body-ctm d-flex flex-column' >
                <Card.Title>{props.product.name}</Card.Title>
                <Card.Text className='mt-auto mb-1'>
                    price: {props.product.price}
                </Card.Text>
                <Card.Text>
                    Quantity: {props.product.stock}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardComponent