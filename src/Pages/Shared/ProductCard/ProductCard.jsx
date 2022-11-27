import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaDollarSign, FaMapMarkerAlt, FaRegClock, FaUserClock } from 'react-icons/fa';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import useBuyer from '../../../Hooks/useBuyer';
import useBooking from '../../../Hooks/useBooking';
import Loading from '../Loading/Loading';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useSeller from '../../../Hooks/useSeller';
import { useQuery } from '@tanstack/react-query';

const ProductCard = ({product, handelBooking}) => {
    const { _id , category, name, photo, location, originalPrice, reselPrice, useDuration, decription, sellerEmail, publish} = product;

    const { user } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
    const [isBooking, isBookingLoading] = useBooking(_id);
    

    if(isBuyerLoading && isBookingLoading){
        return <Loading></Loading>
    }


    return (
        <div className="card glass shadow-xl">
            <figure>
                <PhotoProvider>
                    <PhotoView  key={_id} src={photo}>
                        <img className="w-full h-80" src={photo} alt="product" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-lg badge-warning">
                        Category: {category}
                    </div>
                </h2>
                <p>
                    {
                        decription.length > 50? decription.slice(0, 110) + '.....' : decription
                    }
                </p>
                <div className='flex items-center gap-4'>
                    <FaRegClock></FaRegClock><span>Publish: {publish}</span>       
                </div>
                <div className='flex items-center gap-4'>
                <FaMapMarkerAlt></FaMapMarkerAlt><span>Location: {location}</span>       
                </div>
                
                <div className='flex items-center gap-4'>
                    <FaDollarSign></FaDollarSign><span>Original Price: {reselPrice}</span>       
                </div>

                <div className='flex items-center gap-4'>
                    <FaUserClock></FaUserClock><span>Used: {useDuration}</span>       
                </div>
                
                <div className="flex justify-between items-center">
                    <div className="badge p-2 badge-secondary">
                        <FaDollarSign></FaDollarSign><span>Price: {originalPrice}</span>
                    </div> 
                    {
                        isBuyer &&
                        <label onClick={() => handelBooking(product)} htmlFor="booking-modal"
                        className={`btn btn-primary text-white ${isBooking && 'hidden'}`}>{isBooking ? 'Booked' : 'Booking'}</label>
                        
                    }

                    {
                        isBooking &&
                        <button className='btn btn-primary' disabled>Booked</button>
                    }
                    

                    {/* <Link to={`/product/${_id}`}>
                        <button className="btn btn-primary ">Book Now</button>
                    </Link> */}
                </div>

            </div>
        </div>
    );
};

export default ProductCard;