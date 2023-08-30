import React from "react";
import { Link } from "react-router-dom";
import "./BannerItem.css";

const BannerItem = ({ slide }) => {
  const { image, title, Decription, id, prev, next } = slide;

  return (
    <div
      id={`slide${id}`}
      className="carousel-item w-full flex-col justify-center items-center"
    >
      <div className="carousel-img mx-auto">
        <img src={image} className="w-full" />
      </div>
      <div className="-mt-36 text-center">
        <h1 classsName="text-3xl md:text-6xl font-bold">{title}</h1>
        <p className="">{Decription}</p>
        {/* <Link to={'/products'}>
                    <button className="mx-auto btn btn-active btn-primary">Start Shoppping</button>
                </Link> */}
        <div className="flex justify-between -mt-30">
          <a href={`#slide${prev}`} className="text-4xl px-5 text-">
            ❮
          </a>
          <a href={`#slide${next}`} className="text-4xl px-5 text-">
            ❯
          </a>
        </div>
      </div>
    </div>
    // <div id={`slide${id}`} className="carousel-item relative w-full">
    //     <div className='carousel-img mx-auto'>
    //         <img src={image} className="" />
    //     </div>
    //     <div className="absolute transform left-24 top-1/4">
    //         <h1 classsName='text-3xl md:text-6xl font-bold text-white'>
    //             {title}
    //         </h1>
    //     </div>
    //     <div className="absolute left-24 transform  w-2/5 top-72">
    //         <p className='text-lg md:text-xl text-white'>
    //             {Decription}
    //         </p>
    //     </div>
    //     <div className="absolute transform -translate-y-1/2 w-2/5 left-24 top-3/4">
    //         <Link to={'/products'}>
    //             <button className="mx-auto btn btn-active btn-primary">Visit all Products</button>
    //         </Link>
    //     </div>
    //     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //     <a href={`#slide${prev}`} className="text-4xl px-5 text-white">❮</a>
    //     <a href={`#slide${next}`} className="text-4xl px-5 text-white">❯</a>
    //     </div>
    // </div>
  );
};

export default BannerItem;
