import React, { useState } from 'react';
import BannerItem from './BannerItem/BannerItem';
import slider1 from '../../../assets/images/slider1.jpg';
import slider2 from '../../../assets/images/slider2.jpg';
import slider3 from '../../../assets/images/slider3.jpg';
import slider4 from '../../../assets/images/slider4.jpeg';
import slider5 from '../../../assets/images/slider5.jpg';
import slider6 from '../../../assets/images/slider6.jpg';
import Carousel from 'nuka-carousel/lib/carousel';

const Bannder = () => {

    const bannerData2 = [
        {   
            id: 1,
            image: slider1,
            title: 'Chair Collection',
            Decription: 'Hot stuff, new stuff, fun stuff, soon be your stuff?'
        },
        {   
            id: 2,
            image: slider2,
            title: 'Easy Living',
            Decription: 'Hot stuff, new stuff, fun stuff, soon be your stuff?',
            next: 3
        },
        {   
            id: 3,
            image: slider3,
            title: 'Very low of coast',
            Decription: 'Hot stuff, new stuff, fun stuff, soon be your stuff?'
        },
        {   
            id: 4,
            image: slider4,
            title: 'Very low of coast',
            Decription: 'Hot stuff, new stuff, fun stuff, soon be your stuff?'
        },
        {   
            id: 5,
            image: slider5,
            title: 'Very low of coast',
            Decription: 'Hot stuff, new stuff, fun stuff, soon be your stuff?'
        },
        {   
            id: 6,
            image: slider6,
            title: 'Very low of coast',
            Decription: 'Hot stuff, new stuff, fun stuff, soon be your stuff?'
        },
    ]

    return (
    <div className="pt-16">
        <div className='w-full md:h-[55vh] h-[220px]'>
            <Carousel
             wrapAround={true} 
             autoplay={true}
             animation={'zoom'}
             cellAlign={'center'}
             >
                {
                    bannerData2?.map( img => <img className='w-full md:h-[55vh] h-[220px]' src={img?.image} />)
                }
            </Carousel>
        </div>
    </div>
    );

};

export default Bannder;