import React, { useState } from 'react';
import '../styles/components/carousel.scss';

interface CarouselProps {
    pictures: Array<string>;
}

export default function Carousel(props: CarouselProps) {
    const [index, setIndex] = useState(0);

    function handlePrevIndex() {
        const indexResult = index > 0 ? index - 1 : props.pictures.length - 1;
        setIndex(indexResult);
    }

    function handleNextIndex() {
        const indexResult = index < props.pictures.length - 1 ? index + 1 : 0;
        setIndex(indexResult);
    }

    function displayButton() {
        return (
            <div className='buttons'>
                {props.pictures.length > 1 ?
                    <>
                        <button className='prev-btn' onClick={handlePrevIndex}>&#x2039;</button>
                        <button className='next-btn' onClick={handleNextIndex}>&#x203A;</button>
                    </>
                    : <></>}

            </div>
        )
    }

    return (
        <div id="carousel">
            <img className="picture" src={props.pictures[index]} alt={`${index}`} />

            {displayButton()}
        </div>
    );

}
