import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import useAdUpdate from "../../../../Hooks/useAdUpdate";
import useDelete from "../../../../Hooks/useDelete";
import Loading from "../../../Shared/Loading/Loading";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await fetch(`https://sokher-furniture.vercel.app/seller/products?email=${user.email}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handelAdvertisigProduct = (_id) => {
    if (!_id) {
      return <Loading></Loading>;
    }

    // fetch(`https://sokher-furniture.vercel.app/seller/advertising/product/${_id}`, {
    //     method: 'PUT'
    // })
    // .then(res => res.json())
    // .then(data => {
    //     if(data.modifiedCount > 0 ){
    //         toast.success('advertising successfull')
    //         refetch()
    //     }
    //     console.log(data);
    // })

    // AdStatus
    // fetch(`https://sokher-furniture.vercel.app/seller/advertising/product/${_id}`, {
    //     method: "PATCH",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify({AdStatus: 'advertised'}),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       if (data.acknowledged) {
    //         toast.success('advertising successfull');
    //       }
    //     })
    //     .catch((err) => console.error(err));

    console.log(_id);
  };

  // _id , category, name, photo, location, originalPrice, reselPrice, useDuration, decription, sellerEmail, publish
  return (
    <div>
      <h2 className="text-3xl mb-10">My Products: {products.length}</h2>
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
              <th>Status</th>
              <th>Advertisig</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr>
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
                <td>{product.status}</td>
                <td>
                  <button onClick={() => useAdUpdate(product._id, refetch)} className="btn btn-sm btn-success">
                    {product.AdStatus ? product.AdStatus : "Advertising"}
                  </button>
                </td>
                <td>
                  <button onClick={() => useDelete(product._id, refetch)} className="btn btn-sm btn-error">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
