import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useAdmin from "../../../Hooks/useAdmin";
import useSeller from "../../../Hooks/useBooking";
import useBuyer from "../../../Hooks/useBuyer";
import Loading from "../../Shared/Loading/Loading";

const Dashboard = () => {

  const {user} = useContext(AuthContext);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  if(isBuyerLoading || isSellerLoading || isAdminLoading){
    return <Loading></Loading>
  }


  return (
    <div className="mt-10 flex md:flex-nowrap flex-wrap justify-evenly gap-5 bg-base-200 shadow-xl py-10 rounded-lg items-center">
      <div className="">
        <img className="w-96 border-primary border-4 rounded-full h-96" src={user?.photoURL} alt="" />
      </div>
      <div className="flex flex-col gap-3">
          <h2 className="text-3xl text-center sm:text-left font-semibold">
            {
              isAdmin && 'Admin'
            }
            {
               isSeller && 'Seller'
            }
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold">{user?.displayName}</h1>
          <p className="text-2xl md:text-2xl">
            {user?.email}
          </p>
      </div>
  </div>
  );
};

export default Dashboard;
