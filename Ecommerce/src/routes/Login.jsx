//hooks
import { useState, useRef, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
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
//react-router
import { Link, useNavigate } from 'react-router-dom';


//regex for validation
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Login() {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errorRef = useRef();
    const [disableButton, setDisableButton] = useState(true);

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    //to focus in the name input when open this page
    useEffect(() => {
        userRef.current.focus();
        const checkHealth = async () => {
            const healthUrl = '/health';
            try {
                const response = await axios.get(healthUrl);
                setDisableButton(false);
            } catch (err) {
                console.log(err);
            }
        }
        // checkHealth();
        setDisableButton(true);
    }, []);

    useEffect(() => {
        // setErrorMsg('');
        setErrorMsg("the API is not runnig");
    }, [user, password]);


    const urlUsers = '/Account/v1/login';
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = {
                "name": user,
                "email": user,
                "password": password,
            };
            const requisition = {
                headers: { 'content-type': 'application/json' },
                withCredentials: true
            };
            const response = await axios.post(urlUsers, JSON.stringify(userData), requisition);
            const acessToken = response.data;

            setUser('');
            setPassword('');
            setAuth({ user, acessToken });
            return navigate("/");

        } catch (err) {
            if (!err?.response) {
                setErrorMsg('No server response');
            } else if (err.response?.status === 400) {
                setErrorMsg('missing username or password');
            } else if (err.response?.status === 401) {
                setErrorMsg('Invalid credentials');
            }
            errorRef.current.focus();
        }

    }

    return (
        <section className='d-flex align-items-center justify-content-center background my-sm-2 py-sm-5'>
            <div className='py-sm-5'>
                <Row className='pb-5 pt-lg-5'>
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
                                variant=""
                                id='text-color-white'
                                className="mb-3 mt-5"
                                type="submit"
                                disabled={disableButton}>
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