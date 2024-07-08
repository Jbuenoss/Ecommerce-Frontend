import { useState, useEffect } from 'react';
import axios from '../api/axios';

import mockProducts from '../mock/mockProducts';

import SliderBar from '../components/SliderBar';
import imgMain from '../assets/Ecommerce_rigth-removebg-preview.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [productsInPromotion, setProducts] = useState([]);
    const [electronicsproducts, setElectronicsProducts] = useState([]);
    const [clothingproducts, setClothingProducts] = useState([]);
    const [booksproducts, setBooksProducts] = useState([]);
    const [compAndAccesproducts, setCompAndAccesProducts] = useState([]);
    const [hobbiesproducts, setHobbiesProducts] = useState([]);
    const productsUrl = '/Product';

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(productsUrl);
                const allProducts = response.data;

                setProducts(allProducts.filter(product => product.isOnPromotion === true));
                setElectronicsProducts(allProducts.filter(product => product.category == 0));
                setClothingProducts(allProducts.filter(product => product.category === 1));
                setBooksProducts(allProducts.filter(product => product.category === 2));
                setCompAndAccesProducts(allProducts.filter(product => product.category === 3));
                setHobbiesProducts(allProducts.filter(product => product.category === 4));
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        }
        // fetchProducts();
        //adapting for frontend deploy
        setProducts(mockProducts.filter(product => product.isOnPromotion === true));
        setElectronicsProducts(mockProducts.filter(product => product.category == 0));
        setClothingProducts(mockProducts.filter(product => product.category === 1));
        setBooksProducts(mockProducts.filter(product => product.category === 2));
        setCompAndAccesProducts(mockProducts.filter(product => product.category === 3));
        setHobbiesProducts(mockProducts.filter(product => product.category === 4));
        setIsLoading(false);
    }, []);

    return (
        <>
            <div className='img-banner d-flex justify-content-center align-items-center text-center'>
                <Row className='img-banner home-maxsize'>
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
                <div className='text-capitalize d-flex justify-content-center'>
                    <div className='home-maxsize'>
                        <h2 className='text-center mt-3 text-secondary'>Products on promotion</h2>
                        <SliderBar products={productsInPromotion} />
                        <h2 className='text-center mt-3 text-secondary'>electronics</h2>
                        <SliderBar products={electronicsproducts} />
                        <h2 className='text-center mt-3 text-secondary'>clothing</h2>
                        <SliderBar products={clothingproducts} />
                        <h2 className='text-center mt-3 text-secondary'>books</h2>
                        <SliderBar products={booksproducts} />
                        <h2 className='text-center mt-3 text-secondary'>Computers And Accessories</h2>
                        <SliderBar products={compAndAccesproducts} />
                        <h2 className='text-center mt-3 text-secondary'>hobbies</h2>
                        <SliderBar products={hobbiesproducts} />
                    </div>
                </div>
            }
        </>
    );
}

export default Home