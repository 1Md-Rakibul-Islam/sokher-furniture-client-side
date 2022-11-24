import React from 'react';
import { Link } from 'react-router-dom';
import './BannerItem.css'

const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img mx-auto'>
                <img src={image} className="rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-3xl md:text-6xl font-bold text-white'>
                    Wellcome to <br />
                    Sunlight Dental Care <br />
                    
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                <p className='text-lg md:text-xl text-white'>
                Dentistry aims to identify the drivers of disease for each individual patient, and focus on practical strategies limiting these factors.
                </p>
            </div>
            <div className="absolute transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                {/* <button className="btn btn-error mr-5">Warning</button> */}
                <Link to={'/service'}>
                    <button className="mx-auto btn btn-active btn-primary">Visit all Service</button>
                </Link>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${prev}`} className="btn btn-primary btn-circle mr-5">❮</a> 
            <a href={`#slide${next}`} className="btn btn-primary btn-circle">❯</a>
            </div>
        </div> 
    );
};

export default BannerItem;