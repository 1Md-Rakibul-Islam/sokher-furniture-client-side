import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../Shared/Loading/Loading';

const ReportedItems = () => {

    const {data: products, isLoading, refetch} = useQuery({
        queryKey: ['product'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/products/reported`)
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

    const handleDeleteRepotedProduct = () => {
        console.log();
    }

    // _id , category, name, photo, location, originalPrice, reselPrice, useDuration, decription, sellerEmail, publish
    return (
        <div>
            <h2 className='text-3xl mb-10'>Reported Products: {products.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>Delete</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            products.map( (product, i) =>  <tr>
                                <th>{1 + i}</th>
                                <th>
                                    <div className="avatar">
                                        <div className="w-32 h-24 rounded">
                                            <img src={product.photo} />
                                        </div>
                                    </div>
                                </th>
                                <td>{product.name}</td>
                                <td>{product.status}</td>
                                <td>{product.reselPrice} TK</td>
                                <td>{product.publish}</td>
                                <td>
                                    <button onClick={handleDeleteRepotedProduct} className="btn btn-sm btn-error">Delete</button>
                                </td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItems;
