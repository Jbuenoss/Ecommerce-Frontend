import { useContext, useState } from "react";
import AuthContext from '../context/AuthProvider';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreateProduct() {

    const { Auth } = useContext(AuthContext);
    const [isOnPromotion, setIsOnPromotion] = useState(false); 


    const handleCheckBox = () => {
        setIsOnPromotion(i => !i);
    }

    return (
        <div>
            {Auth?.user ? (
                <div className="d-flex justify-content-center align-items-center my-3">
                    <Form className='border p-4'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control type="number" placeholder="Password" />
                        </Form.Group>

                        <Form.Select aria-label="Select Product Category" className='mb-3'>
                            <option>Select Product Category</option>
                            <option value="1">Electronics</option>
                            <option value="2">Clothing</option>
                            <option value="3">Books</option>
                            <option value="4">Computers And Accessories</option>
                            <option value="5">Hobbies</option>
                        </Form.Select>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onChange={handleCheckBox} 
                                type="checkbox" 
                                label="Is on promotion"
                                checked={isOnPromotion} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Price of promotion</Form.Label>
                            <Form.Control type="number" placeholder="" disabled={!isOnPromotion}/>
                        </Form.Group>

                        <Button variant='' id='text-color-white' type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>

            ) : (
                <div>
                    you're not logged in
                </div>
            )}
        </div>


    );
}

export default CreateProduct