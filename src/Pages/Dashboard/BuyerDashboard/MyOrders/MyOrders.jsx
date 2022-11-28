import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
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
      const res = await fetch(`https://sokher-furniture.vercel.app/user/orders?email=${user.email}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(products);

  // _id , category, name, photo, location, originalPrice, reselPrice, useDuration, decription, sellerEmail, publish
  // {"_id":{"$oid":"63837333fa6f5631a78e2c68"},"productId":"6381319e4568d7fd5159cdec","name":"Dining Chir Set","photo":"https://i.ibb.co/JvsJGHs/tdh-301-cfd-303.jpg","buyerName":"Md. Nazrul Islam","buyerEmail":"nazrul@gmail.com","reselPrice":"15000","buyerPhoneNumber":"01364929989","buyerLocation":"Dhaka, Tejgong-120","sellerEmail":"nusrat@gmail.com"}

  return (
    <div>
      <h2 className="text-3xl mb-10">My Orders: {products.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Pay</th>
              {/* <th></th> */}
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
                <td>{product.reselPrice} TK</td>
                <td>
                  <Link to={`/payment/${product._id}`}>
                    <button className="btn btn-sm btn-secondary">Pay</button>
                  </Link>
                </td>
                {/* <td>
                                    <button onClick={() => useDelete(product._id, refetch)} className="btn btn-sm btn-error">Delete</button>
                                </td>
                                 */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
