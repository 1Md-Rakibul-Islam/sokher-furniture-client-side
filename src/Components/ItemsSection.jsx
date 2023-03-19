import React from 'react';
import BookingModal from '../Pages/Shared/BookingModal/BookingModal';
import ProductCard from '../Pages/Shared/ProductCard/ProductCard';

const ItemsSection = ({Products, itemsCategory}) => {
// const ItemsSection = ({products, isLoading, refetch , itemsCategory}) => {
  
    // if (isLoading) {
    //   return <Loading></Loading>;
    // }
  
    const handelBooking = (product) => {
      // console.log(product);
      setProduct(product);
      // useBooking Hook fetch
      // refetch();
    };
  
    return (
      <div className="md:mx-10 sm:mx-5 mx-2">
        <h2 className="text-left font-bold text-primary text-2xl my-10">{itemsCategory}</h2>
        {/* <SectionHeader>Tending Products</SectionHeader> */}
        <div className="grid justify-items-center gap-5 my-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {Products?.map((product) => (
            <ProductCard key={product?._id} product={product} handelBooking={handelBooking}></ProductCard>
          ))}
          <div>{Products && <BookingModal product={product}></BookingModal>}</div>
        </div>
      </div>
    );
};

export default ItemsSection;