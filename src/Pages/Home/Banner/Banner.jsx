import React, { useState } from 'react';
import BannerItem from './BannerItem/BannerItem';
import slider1 from '../../../assets/images/slider1.jpg';
import slider2 from '../../../assets/images/slider2.webp';
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
            id: 4,
            image: slider4,
            title: 'Bead Collection',
            Decription: 'Hot stuff, new stuff, fun stuff, soon be your stuff?'
        },
        {   
            id: 5,
            image: slider5,
            title: 'Furniture Sale',
            Decription: 'Hot stuff, new stuff, fun stuff, soon be your stuff?'
        },
        {   
            id: 6,
            image: slider6,
            title: 'Chair Collection',
            Decription: 'Hot stuff, new stuff, fun stuff, soon be your stuff?'
        },
    ]

    return (
    <div className="pt-16">
        <div className='w-full md:h-[90vh] h-[30vh]'>
            <Carousel
             wrapAround={true} 
             autoplay={true}
             animation={'zoom'}
             cellAlign={'center'}
             >
                {
                    bannerData2?.map( banner => <div className='flex items-center w-full'>
                            <div className='w-[40vw] md:w-[40vw] md:h-[90vh] h-[30vh] bg-purple-900 md:px-10 px-2 flex sm:justify-center justify-evenly items-start flex-col gap-y-2 md:gap-y-5'>
                                <h2 className='md:text-[3.5em] text-[1.2em] font-bold text-white mt-5'>{banner?.title}</h2>
                                <h2 className='md:text-[1.2em] text-sm font-semibold text-white'> Up to $30 off your first order</h2>
                                <button className='btn md:btn-md btn-sm btn-outline bg-white rounded-full mb-5'>Order Now</button>
                            </div>
                            
                            <img className='w-[60vw] md:w-[60vw] md:h-[90vh] h-[30vh]' src={banner?.image} />
                        </div>)
                }
            </Carousel>
        </div>
    </div>
    );

};

export default Bannder;