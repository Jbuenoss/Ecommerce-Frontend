import { useState, useEffect } from 'react';
import axios from '../api/axios';

import CardComponent from '../components/CardComponent';

import imgMain from '../assets/Ecommerce rigth.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

function Home() {

    const [productsInPromotion, setProducts] = useState([]);
    const productsUrl = '/Product';
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(productsUrl);
                const allProducts = response.data;

                setProducts(allProducts.filter(product => product.isOnPromotion === false));
            } catch (err) {
                console.log(err);
            }
        }

        fetchProducts();
    }, []);

    return (
        <>
            <div className='banner-ctm d-flex justify-content-center align-items-center text-center'>
                <Row className='img-banner'>
                    <Col sm><img src={imgMain} /></Col>
                    <Col sm className='me-3'>
                        <h2 className='text-white h-100 d-flex align-items-center text-center'>
                            Welcome to Ecommerce - Your Ultimate Destination for All Your Needs!
                        </h2>
                    </Col>
                </Row>
            </div>

            <Container className='d-flex flex-row card-wrapper'>
                <div className='card-list'>
                    {productsInPromotion.map((element) => {
                        return <CardComponent key={element.id} product={element} />
                    })}
                </div>

            </Container>
        </>
    );
}

export default Home