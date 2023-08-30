import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orders"],
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
      <h2 className="text-center text-3xl my-5">My Orders: {orders?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, i) => (
              <tr>
                <th>{1 + i}</th>
                <th>
                  <div className="avatar">
                    <div className="w-32 h-24 rounded">
                      <img src={order?.photo} />
                    </div>
                  </div>
                </th>
                <td>{order?.name}</td>
                <td>{order?.reselPrice} TK</td>
                <td>
                  {order?.reselPrice && !order?.paid && (
                    <Link to={`/dashboard/bookings/pay/${order._id}`}>
                      <button className="btn btn-sm btn-secondary">Pay</button>
                    </Link>
                  )}
                  {order?.reselPrice && order?.paid && (
                    <span className="text-primary">Paid</span>
                  )}
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
