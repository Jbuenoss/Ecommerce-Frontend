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
import { Link } from 'react-router-dom';


import './style.css';

//regex for validation
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Login() {  
    const userRef = useRef();
    const errorRef = useRef();

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

    //For error and sucess
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

    useEffect(() => {
        setErrorMsg('');
    }, [user, password, matchPassword]);


    //vh: viewport
    return (
        <>
        {sucess ? (
            <section>
                <p>Sucess Sign up!</p>
                <p>Main Page</p>
                <a href='#'>Sign in</a>
            </section>
        ) : (

            <section className='d-flex align-items-center justify-content-center background my-sm-2 py-sm-5'>
                <div className='py-sm-5'>
                    <Row className='pb-5 pt-sm-5'>
                        <Col className='me-2 d-flex align-items-center justify-content-center'>
                            <img src={logo} className='img-ctm'></img>
                        </Col>
                        <Col className='ms-2 d-flex align-items-center justify-content-center'>
                            <Form className='px-5 pt-4 pb-2 rounded background-form'
                                id='border-size' >
                                {/* for display the error */}
                                <p ref={errorRef} className={errorMsg ? "errmsg" : "offscream"} aria-live="assertive">{errorMsg}</p>
                                <Form.Group className="mb-3" controlId="Email-info">
                                    <Form.Label>
                                        Email address:
                                        <span className={validName ? 'valid' : 'hide'}><FaCheck /></span>
                                        <span className={validName || !user ? 'hide' : 'invalid'}><FaTimes /></span>
                                    </Form.Label>

                                    <Form.Control type="email"
                                        ref={userRef}
                                        autoComplete='off'
                                        onChange={(e) => setUser(e.target.value)}
                                        required
                                        aria-invalid={validName ? 'false' : 'true'}
                                        aria-describedby='uidnote'
                                        onFocus={() => setUserFocus(true)}
                                        onBlur={() => setUserFocus(false)}
                                        placeholder="Enter email" />
                                    <p id='uidnote' className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                                        <FaInfoCircle />
                                        4 to 24 characteres<br />
                                        must begin with a letter<br />
                                        Letters, numbers, undescores, hyphens allowed.
                                    </p>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="Password-info">
                                    <Form.Label>
                                        Enter Password
                                        <span className={validPassword ? 'valid' : 'hide'}><FaCheck /></span>
                                        <span className={validPassword || !password ? 'hide' : 'invalid'}><FaTimes /></span>
                                    </Form.Label>

                                    <Form.Control type="password"
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        aria-invalid={validPassword ? 'false' : 'true'}
                                        aria-describedby='pwdnote'
                                        onFocus={() => setPasswordFocus(true)}
                                        onBlur={() => setPasswordFocus(false)} />
                                    <p id='pwdnote' className={passwordFocus && password && !validPassword ? "instructions" : "offscreen"}>
                                        <FaInfoCircle />
                                        8 to 24 characteres<br />
                                        must include uppercase and lowercase letters, a number and special
                                        character.<br />
                                    </p>
                                </Form.Group>

                                <Button variant=""
                                    id='text-color-white'
                                    className="mb-3 mt-5"
                                    type="submit"
                                    disabled={!validName || !validPassword || !validMatch}>
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
        )}
    </>
    );

}

export default Login