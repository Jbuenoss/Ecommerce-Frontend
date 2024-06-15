//hooks
import { useState, useRef, useEffect } from 'react';
//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//css
import './style.css';
//icons
import { FaInfoCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

//regex for validation
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Register() {  
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
        <div className='d-flex align-items-center justify-content-center vh-100 background'>

            {/* for display the error */}
            <p ref={errorRef} className={errorMsg ? "errmsg" : "offscream"} aria-live="assertive">{errorMsg}</p>

            <Form className='border p-5 border-info rounded background-form' id='border-size'>
                <Form.Group className="mb-3" controlId="Email-info">

                    <Form.Label>
                        Email address:
                        <span className={validName ? 'valid' : 'hide'}><FaCheck/></span>
                        <span className={validName || !user ? 'hide' : 'invalid'}><FaTimes/></span>
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
                        4 to 24 characteres<br/>
                        must begin with a letter<br/>
                        Letters, numbers, undescores, hyphens allowed.
                    </p>
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

export default Register