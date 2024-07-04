import { useEffect, useRef } from 'react';
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

import CardComponent from './CardComponent';

function SliderBar(props) {
    const cardListRef = useRef(null);
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);


    useEffect(() => {
        prevButtonRef.current.style.display = "none";
    }, []);

    const handleSlideButton = (e) => {
        const cardList = cardListRef.current;

        const direction = e.target.id === 'prev-slide' ? -0.5 : 0.5;
        const scrollAmount = cardList.clientWidth * direction;
        const maxScrollLeft = cardList.scrollWidth - cardList.clientWidth;

        cardList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setTimeout(() => {
            prevButtonRef.current.style.display = cardList.scrollLeft <= 0 ? "none" : "block";
            nextButtonRef.current.style.display = cardList.scrollLeft >= maxScrollLeft ? "none" : "block";
        }, 700)
    }

    return (
        <div className='card-wrapper mb-4 mx-5'>
            <div className="slide-wrapper">
                <span ref={prevButtonRef}><FaArrowCircleLeft onClick={handleSlideButton} className='slide-button-ctm' id='prev-slide' /></span>
                <div className='card-list' ref={cardListRef}>
                    {props.products.map((element) => {
                        return <CardComponent key={element.id} product={element} />
                    })}
                </div>
                <span ref={nextButtonRef}><FaArrowCircleRight onClick={handleSlideButton} className='slide-button-ctm' id='next-slide' /></span>
            </div>
        </div>
    );
}

export default SliderBar