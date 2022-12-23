import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";

const MyBuyers = () => {
  /* https://sokher-furniture-1md-rakibul-islam.vercel.app/seller/buyers?email=nusrat@gmail.com */

  const { user } = useContext(AuthContext);

  const {
    data: buyers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch(`https://sokher-furniture-1md-rakibul-islam.vercel.app/seller/buyers?email=${user.email}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  // {"_id":{"$oid":"63837333fa6f5631a78e2c68"},"productId":"6381319e4568d7fd5159cdec","name":"Dining Chir Set","photo":"https://i.ibb.co/JvsJGHs/tdh-301-cfd-303.jpg","buyerName":"Md. Nazrul Islam","buyerEmail":"nazrul@gmail.com","reselPrice":"15000","buyerPhoneNumber":"01364929989","buyerLocation":"Dhaka, Tejgong-120","sellerEmail":"nusrat@gmail.com"}

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
