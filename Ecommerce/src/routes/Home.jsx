import { useState, useEffect, useRef } from 'react';
import axios from '../api/axios';

import mockProducts from '../mock/mockProducts';

import SliderBar from '../components/SliderBar';
import imgMain from '../assets/Ecommerce_rigth-removebg-preview.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';



function Home() {
    const cardListRef = useRef(null);

    const [isLoading, setIsLoading] = useState(true);
    const [productsInPromotion, setProducts] = useState([]);
    const productsUrl = '/Product';

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(productsUrl);
                const allProducts = response.data;

                setProducts(allProducts.filter(product => product.isOnPromotion === false));
            } catch (err) {
                setProducts(mockProducts.filter(product => product.isOnPromotion === true));
            } finally {
                setIsLoading(false);
            }
        }

        fetchProducts();
    }, []);

    return (
        <>
            <div className='d-flex justify-content-center align-items-center text-center'>
                <Row className='img-banner'>
                    <Col md={6} sm={12}><img src={imgMain} /></Col>
                    <Col md={6} sm={12}>
                        <h2 className='me-md-2 me-0 text-secondary h-100 d-flex align-items-center text-center pb-5 pb-md-0'>
                            Welcome to Ecommerce - Your Ultimate Destination for All Your Needs!
                        </h2>
                    </Col>
                </Row>
            </div>
            
            {isLoading ?
                <h2 className='card-list-loading d-flex justify-content-center align-items-center'>Loading...</h2> :
                <div>
                    <h2 className='text-center mt-3 text-secondary'>Products in promotion</h2>
                    <SliderBar products={productsInPromotion} />
                </div>
                
            }
        </>
    );
}

export default Home