import React from 'react';
import BannerItem from './BannerItem/BannerItem';

const Bannder = () => {
    const bannerData = [
        {   
            id: 1,
            image: 'https://cdn.dal.ca/faculty/dentistry/_jcr_content/contentPar/featureslider/featureSlider/featureslide_0/image.adaptive.620.high.jpg/1471286172129.jpg',
            prev: 3,
            next: 2
        },
        {   
            id: 2,
            image: 'https://clydemunrodental.com/wp-content/uploads/2022/05/CLYDE-MONROE-GLASGOW1862_LR-e1651684633183.jpg?bp=w1400&id=25129',
            prev: 1,
            next: 3
        },
        {   
            id: 3,
            image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/327/327515/an-infographic-showing-how-dental-implants-work.jpg',
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