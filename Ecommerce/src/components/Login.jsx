import { useState, useRef, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './style.css';

//regex for validation
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Login() {  

    //vh: viewport
    return (
        <div className='d-flex align-items-center justify-content-center vh-100 background'>
            <Form className='border p-5 border-info rounded background-form' id='border-size'>
                <Form.Group className="mb-3" controlId="Email-info">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Password-info">
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="info" id='text-color-white' type="submit">
                    Sign Up
                </Button>
            </Form>
        </div>
    );

}

export default Login