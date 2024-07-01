import { useState, useEffect } from 'react';
import axios from '../api/axios';

import CardComponent from '../components/CardComponent';

import imgMain from '../assets/Ecommerce_rigth-removebg-preview.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

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
            <div className='d-flex justify-content-center align-items-center text-center'>
                <Row className='img-banner p-4'>
                    <Col md={6} sm={12}><img src={imgMain} /></Col>
                    <Col md={6} sm={12}>
                        <h2 className='me-md-2 me-0 text-white h-100 d-flex align-items-center text-center pb-5 pb-md-0'>
                            Welcome to Ecommerce - Your Ultimate Destination for All Your Needs!
                        </h2>
                    </Col>
                </Row>
            </div>

            <Container className='card-wrapper mb-4'>
                <h2 className='text-center mt-3'>Products in promotion</h2>
                <FaArrowCircleLeft className='slide-button-ctm'/>
                <FaArrowCircleRight className='slide-button-ctm'/>
                <div className='card-list'>
                    {productsInPromotion.map((element) => {
                        return <CardComponent key={element.id} product={element} />
                    })}
                </div>
                <div className="slider-scrollbar">
                    <div className="scrollbar-track">
                        <div className="scrollbar-thumb"></div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Home