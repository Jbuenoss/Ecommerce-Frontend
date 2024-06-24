import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';
import Category from '../components/Category';

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import photoProduct from '../assets/Generic product.jpg';

function Product() {
    const { productId } = useParams();
    const productUrl = `/Product/${productId}`
    const [product, setProduct] = useState();

    useEffect(() => {
        const handleProduct = async () => {
            try {
                const response = await axios.get(productUrl);
                setProduct(response.data);
            } catch (err) {
                if (!err?.response) {
                    console.log("no server response");
                } else {
                    console.log("internal error");
                }
            }
        }
        handleProduct();
    }, []);

    return (
        <div className='mx-4 my-3'>
            <Row className='border me-5 ms-3 ms-md-0 me-md-0'>
                <Col sm={12} md={5} className='ps-5 py-3'>
                    <Image src={photoProduct} rounded className='img-product-ctm' />
                </Col>
                <Col sm={12} md={7} className='ps-5 py-2 d-flex flex-column'>
                    <h2>{product?.name}</h2>
                    <p className='primary-color fs-3'>R${product?.price}</p>
                    <p>{product?.description}</p>
                    <Category numberCategory={product?.category}/>
                    <div className='d-flex flex-column justify-content-end h-100'>
                        <p>stock: {product?.stock}</p>
                        <Button className='mb-2' id='button-ctm'>Buy Product</Button>
                    </div>
                </Col>
            </Row>

            <section className='mt-3 d-flex flex-column'>
                <h2>Comments:</h2>
                <div className='comments-ctm border d-flex align-items-center justify-content-center'>
                    <p>No comments available yet</p>
                </div>
            </section>
        </div>

    );
}

export default Product