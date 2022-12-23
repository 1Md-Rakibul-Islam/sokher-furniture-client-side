import React, { useEffect, useState } from 'react';
import ProductCard from '../Shared/ProductCard/ProductCard';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("https://sokher-furniture-1md-rakibul-islam.vercel.app/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    }, []);
    return (
        <div className='pt-20 md:mx-10 mx-5'>
            <h2 className="text-center text-primary text-4xl">All Products</h2>
            <div className='grid justify-items-center gap-5 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map( product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;