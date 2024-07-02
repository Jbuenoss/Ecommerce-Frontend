import Container from 'react-bootstrap/Container';
import './style.css';
import CardComponent from '../components/CardComponent';
import mockProducts from '../mock/mockProducts';

import { useEffect, useState } from 'react';

import axios from '../api/axios';

function Products() {
    const [isLoading, setIsLoading] = useState(true);
    const ProductUrl = '/product';
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(ProductUrl);
                setProducts(response.data);
            } catch (err) {
                setProducts(mockProducts);
            } finally {
                setIsLoading(false);
            }
        }
        
        fetchData();
    }, []);


    return (
        <Container className='d-flex flex-wrap justify-content-center mb-4'>
            { isLoading ?
            <div className='vh-100 d-flex justify-content-center align-items-center'>Loading</div> : 
            products.map((element) => {
                return <CardComponent key={element.id} product={element} />
            })}
        </Container>
    );
}

export default Products;