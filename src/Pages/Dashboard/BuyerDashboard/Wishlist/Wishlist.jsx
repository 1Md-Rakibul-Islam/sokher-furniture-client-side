import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";

const Wishlist = () => {
  const { user } = useContext(AuthContext);

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await fetch(
        `https://sokher-furniture-1md-rakibul-islam.vercel.app/user/orders?email=${user.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-center text-3xl my-5">Wishlist</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, i) => (
              <tr>
                <th>{1 + i}</th>
                <th>
                  <div className="avatar">
                    <div className="w-32 h-24 rounded">
                      <img src={product?.photo} />
                    </div>
                  </div>
                </th>
                <td>{product?.name}</td>
                <td>{product?.reselPrice} TK</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
