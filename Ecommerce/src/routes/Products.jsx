import Container from 'react-bootstrap/Container';
import './style.css';
import CardComponent from '../components/CardComponent';

import { useEffect, useState } from 'react';

import axios from '../api/axios';

function Products() {

    const ProductUrl = '/product';
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(ProductUrl);
                console.log(response.data);
                setProducts(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        
        fetchData();
    }, []);


    return (
        <Container className='d-flex flex-wrap justify-content-center mb-4'>
            {products.map((element) => {
                return <CardComponent key={element.id} product={element} />
            })}
        </Container>
    );
}

export default Products;