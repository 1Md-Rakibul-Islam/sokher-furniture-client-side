import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const Advertisig = () => {

    const [product, setProduct] = useState([]);

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async() => {
            const res = await fetch(`categories.json`)
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

    const handelBooking = (product) => {
        console.log(product);
        setProduct(product)
        // useBooking Hook fetch
        refetch();
        
    }

    console.log(products);

    return (
        <div>
            <h2 className='text-3xl mb-10'>Tending Products Advertisig</h2>
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

export default Advertisig;


