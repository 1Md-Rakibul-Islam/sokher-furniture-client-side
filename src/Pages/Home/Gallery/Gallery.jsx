import React from 'react';

const Gallery = () => {

    return (
        <section className='my-20'>
            <div className="flex md:gap-5 sm:gap-3 gap-1">
                <div className="flex flex-col md:gap-5 sm:gap-3 gap-1">
                    <div>
                        <img className="h-full w-full rounded-lg hover:shadow-2xl hover:shadow-purple-500" src="https://i.ibb.co/XWftZ5q/h1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-36 md:h-60 w-full rounded-lg hover:shadow-2xl hover:shadow-purple-500" src="https://i.ibb.co/zstC8D9/s1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-full w-full rounded-lg hover:shadow-2xl hover:shadow-purple-500" src="https://i.ibb.co/nCN9tk5/s5.jpg" alt="" />
                    </div>
                </div>
                <div className="flex flex-col md:gap-5 sm:gap-3 gap-1">
                    <div>
                        <img className="h-full w-full rounded-lg hover:shadow-2xl hover:shadow-purple-500" src="https://i.ibb.co/zGxBwqt/s3.jpg" alt="" />
                    </div>
                    <div>
                        <img className="sm:h-full h-56 w-full rounded-lg hover:shadow-2xl hover:shadow-purple-500" src="https://i.ibb.co/Pt2LsfD/h2.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-full w-full rounded-lg hover:shadow-2xl hover:shadow-purple-500" src="https://i.ibb.co/wLw8DTT/w2.jpg" alt="" />
                    </div>
                </div>
                <div className="flex flex-col md:gap-5 sm:gap-3 gap-1">
                    <div>
                        <img className="h-full w-full rounded-lg hover:shadow-2xl hover:shadow-purple-500" src="https://i.ibb.co/S3PsmNm/s4.jpg" alt="" />
                    </div>
                    <div>
                        <img className="md:h-60 h-36 w-full rounded-lg hover:shadow-2xl hover:shadow-purple-500" src="https://i.ibb.co/sjjWhYh/w3.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-full w-full rounded-lg hover:shadow-2xl hover:shadow-purple-500" src="https://i.ibb.co/1d10khP/s2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;