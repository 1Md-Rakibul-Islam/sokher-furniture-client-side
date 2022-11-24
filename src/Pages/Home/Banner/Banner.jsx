import React from 'react';
import BannerItem from './BannerItem/BannerItem';

const Bannder = () => {
    const bannerData = [
        {   
            id: 1,
            image: 'http://caketheme.com/html/ruper/media/banner/parallax.jpg',
            title: 'Chair Collection',
            Decription: 'Hot stuff, new stuff, fun stuff, soon be your stuff?',
            prev: 3,
            next: 2
        },
        {   
            id: 2,
            image: 'http://caketheme.com/html/ruper/media/slider/28.jpg',
            prev: 1,
            title: 'Easy Living',
            Decription: 'Hot stuff, new stuff, fun stuff, soon be your stuff?',
            next: 3
        },
        {   
            id: 3,
            image: 'http://caketheme.com/html/ruper/media/slider/29.jpg',
            title: 'Very low of coast',
            Decription: 'Hot stuff, new stuff, fun stuff, soon be your stuff?',
            prev: 2,
            next: 1
        },
    ]

    return (
    <div className="carousel w-full mx-auto my-5 text-left">

            {
                bannerData.map( slide => <BannerItem 
                key={slide.id}
                slide={slide}
                ></BannerItem>)
            }

    </div>
    );

};

export default Bannder;