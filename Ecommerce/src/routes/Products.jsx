import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './style.css';

import photoProduct from '../assets/Generic product.jpg';

function Products() {

    return (
        <Container className='d-flex flex-wrap justify-content-center'>
            <Card className='card-ctm mt-3'>
                <Card.Img className='card-img-ctm' variant="top" src={photoProduct} />
                <Card.Body className='card-body-ctm d-flex flex-column' >
                    <Card.Title>name of Card</Card.Title>
                    <Card.Text className='mt-auto mb-1'>
                        price:
                    </Card.Text>
                    <Card.Text>
                        Quantity:
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card-ctm mt-3 ms-3'>
                <Card.Img className='card-img-ctm' variant="top" src={photoProduct} />
                <Card.Body className='card-body-ctm d-flex flex-column' >
                    <Card.Title>name of Card</Card.Title>
                    <Card.Text className='mt-auto mb-1'>
                        price:
                    </Card.Text>
                    <Card.Text>
                        Quantity:
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card-ctm mt-3 ms-3'>
                <Card.Img className='card-img-ctm' variant="top" src={photoProduct} />
                <Card.Body className='card-body-ctm d-flex flex-column' >
                    <Card.Title>name of Card</Card.Title>
                    <Card.Text className='mt-auto mb-1'>
                        price:
                    </Card.Text>
                    <Card.Text>
                        Quantity:
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Products;