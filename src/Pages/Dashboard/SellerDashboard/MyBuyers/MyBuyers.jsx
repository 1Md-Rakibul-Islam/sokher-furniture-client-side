import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";

const MyBuyers = () => {
  const { user } = useContext(AuthContext);

  const {
    data: buyers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch(
        `https://sokher-furniture-1md-rakibul-islam.vercel.app/seller/buyers?email=${user.email}`
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
      <h2 className="text-center text-3xl my-5">My Buyers: {buyers.length}</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((buyer, i) => (
              <tr key={i}>
                <th>{1 + i}</th>
                <th>
                  <div className="avatar online">
                    <div className="w-24 rounded-full">
                      <img src={buyer?.buyerImage} />
                    </div>
                  </div>
                </th>
                <td>{buyer?.buyerName}</td>
                <td>{buyer?.buyerEmail}</td>
                <td>{buyer?.buyerPhoneNumber}</td>
                <td>{buyer?.buyerLocation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBuyers;
