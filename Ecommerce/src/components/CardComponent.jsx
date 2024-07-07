//component
import Card from 'react-bootstrap/Card';
//products photos
import elePhoto from '../assets/eletronicsCatepho.jpg';
import cloPhoto from '../assets/clothingCategory.jpg';
import booPhoto from '../assets/booksphoto.jpg';
import comPhoto from '../assets/compAndAcesPho.jpg';
import hobPhoto from '../assets/HobbiesPho.jpg';
//css
import './styleComponent.css';
//react router and react
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CardComponent(props) {
    const [imgSrc, setImgSrc] = useState(null);

    useEffect(() => {
        if (props.product.category == 0)
            setImgSrc(elePhoto)
        else if (props.product.category == 1)
            setImgSrc(cloPhoto)
        else if (props.product.category == 2)
            setImgSrc(booPhoto)
        else if (props.product.category == 3)
            setImgSrc(comPhoto)
        else if (props.product.category == 4)
            setImgSrc(hobPhoto)
    }, []);

    return (
        <Link to={`/products/${props.product.id}`} className='link-ctm'>
            <Card className='card-ctm mt-3 mx-2'>
                <Card.Img className='card-img-ctm' variant="top" src={imgSrc} />
                <Card.Body className='card-body-ctm d-flex flex-column' >
                    <Card.Title className='card-text-ctm'>{props.product.name}</Card.Title>
                    <Card.Text className='mt-auto mb-1 price-text-ctm'>
                        price: {props.product.price}
                    </Card.Text>
                    <Card.Text>
                        Quantity: {props.product.stock}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default CardComponent