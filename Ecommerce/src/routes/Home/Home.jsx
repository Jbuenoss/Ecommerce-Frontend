//react
import { useState, useEffect } from 'react';
//axios
import axios from '../../api/axios';
//fake database
import mockProducts from '../../mock/mockProducts';
//component and img
import SliderBar from '../../components/SliderBar';
import imgMain from '../../assets/Ecommerce_rigth-removebg-preview.png';
//css
import '../style.css';
import styles from './Home.module.css';

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [productsInPromotion, setProducts] = useState([]);
    const [electronicsproducts, setElectronicsProducts] = useState([]);
    const [clothingproducts, setClothingProducts] = useState([]);
    const [booksproducts, setBooksProducts] = useState([]);
    const [compAndAccesproducts, setCompAndAccesProducts] = useState([]);
    const [hobbiesproducts, setHobbiesProducts] = useState([]);
    const productsUrl = '/Product';

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(productsUrl);
                const allProducts = response.data;

                setProducts(allProducts.filter(product => product.isOnPromotion === true));
                setElectronicsProducts(allProducts.filter(product => product.category == 0));
                setClothingProducts(allProducts.filter(product => product.category === 1));
                setBooksProducts(allProducts.filter(product => product.category === 2));
                setCompAndAccesProducts(allProducts.filter(product => product.category === 3));
                setHobbiesProducts(allProducts.filter(product => product.category === 4));
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        }
        // fetchProducts();
        //adapting for frontend deploy
        setProducts(mockProducts.filter(product => product.isOnPromotion === true));
        setElectronicsProducts(mockProducts.filter(product => product.category == 0));
        setClothingProducts(mockProducts.filter(product => product.category === 1));
        setBooksProducts(mockProducts.filter(product => product.category === 2));
        setCompAndAccesProducts(mockProducts.filter(product => product.category === 3));
        setHobbiesProducts(mockProducts.filter(product => product.category === 4));
        setIsLoading(false);
    }, []);

    return (
        <section className={`${styles.homeSection}`}>
            <div className={`${styles.imgBanner} home-maxsize`}>
                <img src={imgMain}/>
                <h2>
                    Welcome to Ecommerce - Your Ultimate Destination for All Your Needs!
                </h2>
            </div>

            {isLoading ?
                <h2 className='card-list-loading d-flex justify-content-center align-items-center'>Loading...</h2> :
                <div className='text-capitalize d-flex justify-content-center'>
                    <div className='home-maxsize'>
                        <h3 className='text-center mt-3'>Products on promotion</h3>
                        <SliderBar products={productsInPromotion} />
                        <h3 className='text-center mt-3'>electronics</h3>
                        <SliderBar products={electronicsproducts} />
                        <h3 className='text-center mt-3'>clothing</h3>
                        <SliderBar products={clothingproducts} />
                        <h3 className='text-center mt-3'>books</h3>
                        <SliderBar products={booksproducts} />
                        <h3 className='text-center mt-3'>Computers And Accessories</h3>
                        <SliderBar products={compAndAccesproducts} />
                        <h3 className='text-center mt-3'>hobbies</h3>
                        <SliderBar products={hobbiesproducts} />
                    </div>
                </div>
            }
        </section>
    );
}

export default Home