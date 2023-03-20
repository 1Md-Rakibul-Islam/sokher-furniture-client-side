import React from 'react';
import { Link } from 'react-router-dom';

const CategoriyCard = ({categoriy}) => {
    const {categoriyName, image, decription } = categoriy;

    console.log(categoriy);
    return (
        <div className="w-full bg-white rounded-lg shadow-2xl ">
            <Link>
                <img src={image} className="w-full h-32 rounded-t-lg" alt="" />
            </Link>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-xl font-semibold tracking-tight">{categoriyName}</h5>
                </a>
                {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{decription}</p> */}
                <div className='flex justify-center items-center underline'>
                    <button href="#" className="btn btn-sm btn-ghost rounded-full">
                        Load More
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default CategoriyCard;