import React from 'react';

const Gallery = () => {

    return (
        <section className='my-20'>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/XWftZ5q/h1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/zstC8D9/s1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/nCN9tk5/s5.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/zGxBwqt/s3.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/Pt2LsfD/h2.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/wLw8DTT/w2.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/S3PsmNm/s4.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/sjjWhYh/w3.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/02Xttwn/w1.jpg" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/1d10khP/s2.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/Pt2LsfD/h2.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/02Xttwn/w1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;