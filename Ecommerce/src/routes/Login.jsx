//hooks
import { useState, useRef, useEffect } from 'react';
//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//css and image
import './style.css';
import logo from '../assets/Ecommerce_rigth-removebg-preview.png'
//axios
import axios from '../api/axios';
//icons
import { FaInfoCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
//react-router
import { Link, useNavigate } from 'react-router-dom';


import './style.css';

//regex for validation
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Login() {
    const userRef = useRef();
    const errorRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    //to focus in the name input when open this page
    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrorMsg('');
    }, [user, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, password);
        navigate("/");
    }

    return (
        <section className='d-flex align-items-center justify-content-center background my-sm-2 py-sm-5'>
            <div className='py-sm-5'>
                <Row className='pb-5 pt-sm-5'>
                    <Col className='me-2 d-flex align-items-center justify-content-center'>
                        <img src={logo} className='img-ctm'></img>
                    </Col>
                    <Col className='ms-2 d-flex align-items-center justify-content-center'>

                        <Form className='px-5 pt-4 pb-2 rounded background-form'
                            id='border-size' onSubmit={handleSubmit} >

                            <p ref={errorRef} className={errorMsg ? "errmsg" : "offscream"} aria-live="assertive">{errorMsg}</p>
                            <Form.Group className="mb-3" controlId="Email-info">
                                <Form.Label>
                                    Email address:
                                </Form.Label>

                                <Form.Control type="email"
                                    ref={userRef}
                                    autoComplete='off'
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required
                                    placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="Password-info">
                                <Form.Label>
                                    Password:
                                </Form.Label>

                                <Form.Control type="password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required />
                            </Form.Group>

                            <Button
                                id='text-color-white'
                                className="mb-3 mt-5"
                                type="submit">
                                Sign in
                            </Button>
                            <p>
                                not Registered?<Link to='/register'>Sign up</Link>
                            </p>
                        </Form>
                    </Col>
                </Row>
            </div>

        </section>
    );

}

export default Login