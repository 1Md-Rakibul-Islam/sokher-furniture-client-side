import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Shared/BookingModal/BookingModal';
import Loading from '../Shared/Loading/Loading';
import ProductCard from '../Shared/ProductCard/ProductCard';

const Categories = () => {

    const products = useLoaderData();

    const [product, setProduct] = useState({});


    if (!products.length > 0){
        return <Loading></Loading>
    }

    const handelBooking = (product) => {
      setProduct(product)
      
    }
    
    return (
        <div className="pt-20">
        <h2 className="text-center text-primary text-4xl">Products</h2>
        <div className="grid justify-items-center gap-5 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            products.map((product) => <ProductCard
              key={product._id}
              product={product}
              handelBooking={handelBooking}
              ></ProductCard>
            )
          }
          <div>
            {
              product && <BookingModal
                product={product}    
                ></BookingModal>
            }
          </div>
        </div>
      </div>
    );
};

export default Categories;