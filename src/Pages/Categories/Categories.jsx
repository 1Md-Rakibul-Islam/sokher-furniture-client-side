import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import ProductCard from '../Shared/ProductCard/ProductCard';

const Categories = () => {

    const products = useLoaderData();

    return (
        <div className="">
        <h2 className="text-center text-white text-4xl">Products</h2>
        <div className="grid justify-items-center gap-3 my-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          { products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    );
};

export default Categories;