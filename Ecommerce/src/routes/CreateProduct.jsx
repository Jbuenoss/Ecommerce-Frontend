import { useContext, useEffect, useState } from "react";
import AuthContext from '../context/AuthProvider';
import axios from '../api/axios';
import { jwtDecode } from 'jwt-decode'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css';

function CreateProduct() {
    const [isOnPromotion, setIsOnPromotion] = useState(false);
    const [promotionPrice, setPromotionPrice] = useState(0);
    const { Auth } = useContext(AuthContext);
    const [productUrl, setProductUrl] = useState('');
    const [errorScreenText, setErrorScreenText] = useState("you're not logged in");

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [category, setCategory] = useState(0);

    useEffect(() => {
        const checkHealth = async () => {
            const healthUrl = '/health';
            try{
                const response = await axios.get(healthUrl);
                setErrorScreenText("you're not logged in");
            } catch(err){
                setErrorScreenText("The API is not running");
            }
        }
        // checkHealth();
        setErrorScreenText("The API is not running");
    }, [])

    if (Auth?.user) {
        useEffect(() => {
            const decoded = jwtDecode(Auth.acessToken);
            setProductUrl(`/Product?UserId=${decoded.id}`)
        }, [Auth]);
    }


    const handleCheckBox = () => {
        setIsOnPromotion(i => !i);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProduct = {
            "name": name,
            "description": description,
            "price": price,
            "stock": stock,
            "category": category,
            "isOnPromotion": isOnPromotion,
            "promotionPrice": promotionPrice
        }
        try {
            const response = await axios.post(productUrl, newProduct);
            setName('');
            setDescription('');
            setPrice(0);
            setStock(0);
            setCategory(0);
            setIsOnPromotion(false);
            setPromotionPrice(0);
            alert('product registered');
        } catch (err) {
            if (!err?.response) {
                console.log("no server response");
            } else {
                console.log("Registration failed");
            }
        }
    }

    return (
        <div className="heigth-min-ctm d-flex flex-column justify-content-center">
            {Auth?.user ? (
                <div className="d-flex justify-content-center align-items-center my-3">
                    <Form className='border p-4' onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                value={price}
                                onChange={(e) => setPrice(parseFloat(e.target.value))}
                                type="number"
                                step="0.01" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control value={stock} onChange={(e) => setStock(parseInt(e.target.value))} type="number" />
                        </Form.Group>

                        <Form.Select onChange={(e) => setCategory(parseInt(e.target.value))} aria-label="Select Product Category" className='mb-3'>
                            <option>Select Product Category</option>
                            <option value={0} >Electronics</option>
                            <option value={1} >Clothing</option>
                            <option value={2} >Books</option>
                            <option value={3} >Computers And Accessories</option>
                            <option value={4} >Hobbies</option>
                        </Form.Select>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onChange={handleCheckBox}
                                type="checkbox"
                                label="Is on promotion"
                                checked={isOnPromotion} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Price of promotion</Form.Label>
                            <Form.Control
                                value={promotionPrice}
                                onChange={(e) => setPromotionPrice(parseFloat(e.target.value))}
                                type="number"
                                step="0.01"
                                placeholder="" disabled={!isOnPromotion} />
                        </Form.Group>

                        <Button variant='' id='text-color-white' type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>

            ) : (
                <div className="warn-ctm d-flex align-items-center justify-content-center">
                    {errorScreenText}
                </div>
            )}
        </div>


    );
}

export default CreateProduct