import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Dashboard = () => {

    const {user} = useContext(AuthContext);

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Name: {user?.displayName}</h1>
          <p className="py-6 text-2xl">
            Email: {user?.email}
          </p>
        </div>
        <div className="card flex-shrink-0 max-w-sm  bg-base-100">
          <div className="card-img">
            <img className="rounded-full" src={user?.photoURL} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
