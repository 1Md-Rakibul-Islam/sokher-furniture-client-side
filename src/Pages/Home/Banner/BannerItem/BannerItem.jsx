import React from 'react';
import { Link } from 'react-router-dom';
import './BannerItem.css'

const BannerItem = ({slide}) => {
    const {image, title, Decription, id, prev, next} = slide;

    return (
        <div id={`slide${id}`} className="carousel-item mt-20 relative w-full">
            <div className='carousel-img mx-auto'>
                <img src={image} className="rounded-xl" />
            </div>
            <div className="absolute transform left-24 top-1/4">
                <h1 className='text-3xl md:text-6xl font-bold text-white'>
                    {title}
                </h1>
            </div>
            <div className="absolute left-24 transform  w-2/5 top-72">
                <p className='text-lg md:text-xl text-white'>
                    {Decription}
                </p>
            </div>
            <div className="absolute transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                <Link to={'/categories'}>
                    <button className="mx-auto btn btn-active btn-primary">Visit all Products</button>
                </Link>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${prev}`} className="text-4xl px-5 text-white">❮</a> 
            <a href={`#slide${next}`} className="text-4xl px-5 text-white">❯</a>
            </div>
        </div> 
    );
};

export default BannerItem;