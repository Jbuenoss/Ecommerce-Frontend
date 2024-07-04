import { useState, useEffect, useRef } from 'react';
import axios from '../api/axios';

import CardComponent from '../components/CardComponent';
import mockProducts from '../mock/mockProducts';

import imgMain from '../assets/Ecommerce_rigth-removebg-preview.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

function Home() {
    const cardListRef = useRef(null);
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);

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
                setProducts(mockProducts.filter(product => product.category == 1 || product.category == 2));
            } finally {
                setIsLoading(false);
            }
        }

        prevButtonRef.current.style.display = "none";

        fetchProducts();
    }, []);

    const handleSlideButton = (e) => {
        const cardList = cardListRef.current;

        const direction = e.target.id === 'prev-slide' ? -0.5 : 0.5;
        const scrollAmount = cardList.clientWidth * direction;
        const maxScrollLeft = cardList.scrollWidth - cardList.clientWidth;

        cardList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setTimeout(() => {
            prevButtonRef.current.style.display = cardList.scrollLeft <= 0 ? "none" : "block";
            nextButtonRef.current.style.display = cardList.scrollLeft >= maxScrollLeft ? "none" : "block";
        }, 700)
    }

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

            <div className='card-wrapper mb-4 mx-5'>
                <h2 className='text-center mt-3'>Products in promotion</h2>
                <div className="slide-wrapper">
                    <span ref={prevButtonRef}><FaArrowCircleLeft onClick={handleSlideButton} className='slide-button-ctm' id='prev-slide' /></span>
                    {isLoading ?
                        <h2 className='card-list d-flex justify-content-center align-items-center'>Loading...</h2> :
                        <div className='card-list' ref={cardListRef}>
                            {productsInPromotion.map((element) => {
                                return <CardComponent key={element.id} product={element} />
                            })}
                        </div>
                    }
                    <span ref={nextButtonRef}><FaArrowCircleRight onClick={handleSlideButton} className='slide-button-ctm' id='next-slide' /></span>
                </div>
            </div>
        </>
    );
}

export default Home