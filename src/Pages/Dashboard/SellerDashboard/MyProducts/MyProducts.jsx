import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

const MyProducts = () => {
    const {user} = useContext(AuthContext);

    // const {data: doctors, isLoading, refetch} = useQuery({
    //     queryKey: ['doctors'],
    //     queryFn: async() => {
    //         const res = await fetch('http://localhost:5000/doctors', {
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         })
    //         const data = await res.json();
    //         return data;
    //     }
    // })


    const {data: products, isLoading, refetch} = useQuery({
        queryKey: ['product'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/seller/products?email=${user.email}`)
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

    // _id , category, name, photo, location, originalPrice, reselPrice, useDuration, decription, sellerEmail, publish
    return (
        <div>
            <h2 className='text-3xl mb-10'>My Products: {products.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>Publish</th>
                        <th>Advertisig</th>
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
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-success">Advertisig</label>
                                </td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;