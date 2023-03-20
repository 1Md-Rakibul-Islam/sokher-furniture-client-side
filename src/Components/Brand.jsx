import React from 'react';
import { Link } from 'react-router-dom';

const Brand = () => {
    return (
        <div>
            <Link to="/">
                <div className='flex items-center gap-2'>
                    <img className='w-[50px] h-[40px] rounded-md' src='https://i.ibb.co/zfMR22m/home-decor-logo.jpg' alt='' />
                    <button className='text-xl font-bold'>
                        <span className="text-3xl text-primary italic">s</span>okher <span className="text-3xl text-primary italic"> F</span>urniture
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default Brand;