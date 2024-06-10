import { useState, useRef, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './style.css';

//regex for validation
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Login() {  
    const userRef = useRef();
    const passawordRef = useRef();

    //validate or not user
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    //validate or not password
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    //validate or not match with the password
    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [MatchFocus, setMatchFocus] = useState(false);

    //For error
    const [errorMsg, setErrorMsg] = useState('');
    const [sucess, setSucess] = useState(false);

    //to focus in the name input when open this page
    useEffect(() => {
        userRef.current.focus();
    }, []);

    //logic to validate the name
    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user]);

    //logic to validate the password with the matchPassword
    useEffect(() => {
        const result = PWD_REGEX.test(password);
        console.log(result);
        console.log(password);
        setValidPassword(result);
        const match = password === matchPassword;
        setValidMatch(match);
    }, [password, matchPassword]);


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