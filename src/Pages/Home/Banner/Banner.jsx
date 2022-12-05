import React from 'react';
import BannerItem from './BannerItem/BannerItem';
import slider1 from '../../../assets/images/slider1.jpg';
import slider2 from '../../../assets/images/slider2.jpg';
import slider3 from '../../../assets/images/slider3.jpg';

const Bannder = () => {
    const bannerData = [
        {   
            id: 1,
            image: slider1,
            title: 'Chair Collection',
            Decription: 'Hot stuff, new stuff, fun stuff, soon be your stuff?',
            prev: 3,
            next: 2
        },
        {   
            id: 2,
            image: slider2,
            prev: 1,
            title: 'Easy Living',
            Decription: 'Hot stuff, new stuff, fun stuff, soon be your stuff?',
            next: 3
        },
        {   
            id: 3,
            image: slider3,
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