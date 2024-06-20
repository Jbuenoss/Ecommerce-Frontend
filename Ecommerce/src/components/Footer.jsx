import './styleComponent.css';
import Container from 'react-bootstrap/Container';
import { FaGithub } from "react-icons/fa";

function Footer(){

    let dateNow = new Date();

    return(
        <footer className='footer-ctm text-white text-center'>
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