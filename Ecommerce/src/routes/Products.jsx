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
    const [searchProducts, setSearchProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(ProductUrl);
                setProducts(response.data);
            } catch (err) {
                setProducts(mockProducts);
                setFilteredProducts(mockProducts);
            } finally {
                setIsLoading(false);
            }
        }
        
        fetchData();
    }, []);

    useEffect(() => {
        if(products.length > 0){
            const lowerCase = searchProducts.toLowerCase();
            setFilteredProducts(products.filter(p => p.name.toLowerCase().includes(lowerCase)));
        }
    }, [searchProducts]);

    return (
        <Container className='d-flex flex-wrap justify-content-center mb-4'>
            <input type='text' onChange={(e) => setSearchProducts(e.target.value)} className='text-search-ctm mt-4 fs-5'></input>
            { isLoading ?
            <div className='vw-100 vh-100 d-flex justify-content-center align-items-center'>Loading</div> : 
            filteredProducts.map((element) => {
                return <CardComponent key={element.id} product={element} />
            })}
        </Container>
    );
}

export default Products;