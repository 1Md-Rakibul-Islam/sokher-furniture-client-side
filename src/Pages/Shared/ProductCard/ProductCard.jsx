import React from 'react';
import { Link } from 'react-router-dom';

import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ProductCard = ({product}) => {
    const { _id , category, name, photo, location, originalPrice, reselPrice, useDuration, decription, sellerEmail, publish} = product;

    return (
        <div className="card lg:w-96 w-80 glass shadow-xl">
            <figure>
                <PhotoProvider>
                    <PhotoView  key={_id} src={photo}>
                        <img src={photo} alt="product" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-warning">
                        Category: {category}
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                    </div>
                </h2>
                <p>
                    {
                        decription.length > 50? decription.slice(0, 110) + '.....' : decription
                    }
                </p>
                <div className="flex justify-between items-center">
                    <div className="badge p-2 badge-secondary">
                        <p>Resel Price: {reselPrice}</p>
                    </div> 
                    <Link to={`/product/${_id}`}>
                    <button className="btn btn-primary ">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;