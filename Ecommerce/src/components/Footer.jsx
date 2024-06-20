import './styleComponent.css';
import Container from 'react-bootstrap/Container';
import { FaGithub } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

function Footer(){

    let dateNow = new Date();

    const location = useLocation();
    let classes = 'footer-ctm text-white';
    if(location.pathname == '/login' || location.pathname == '/register'){
        classes = 'footer-ctm-white';
    }

    return(
        <footer className={` ${classes} text-center`}>
            <Container>
                <h2 className='py-4 border-bottom'>ECOMMERCE</h2>
            </Container>
            <div>
                <p className='fs-5 py-2'>&copy;{dateNow.getFullYear()} copyright by Jbuenoss ,all rights reserved</p>
                <p>Contact:
                    <a href='https://github.com/Jbuenoss' target='_blank'> <FaGithub />Jbuenoss</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer