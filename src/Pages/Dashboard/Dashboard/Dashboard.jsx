import React, { useContext } from "react";
import { FaBoxOpen, FaStoreAlt, FaUsers } from "react-icons/fa";
import UserProfile from "../../../Components/UserProfile";
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
      <section className="p-6 my-6 h-full bg-gray-200 text-gray-100">
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">
          <div className="flex p-8 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 text-gray-white">
                <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">200+</p>
              <p className="capitalize">Total Sell</p>
            </div>
          </div>
          <div className="flex p-8 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-primary">
              <FaUsers className="text-4xl" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">7500+</p>
              <p className="capitalize">Customers</p>
            </div>
          </div>
          <div className="flex p-8 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-primary">
              <FaBoxOpen className="text-4xl" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">172+</p>
              <p className="capitalize">Products</p>
            </div>
          </div>
        </div>
        
        <div  className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-center sm:justify-between items-start mt-16" >
          <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div class="flex items-center justify-between mb-4">
                  <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
                  <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                      View all
                  </a>
            </div>
            <div>
                <div class="flow-root">
                  <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                      <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                  <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                              </div>
                              <div class="flex-1 min-w-0">
                                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      Neil Sims
                                  </p>
                                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                      email@windster.com
                                  </p>
                              </div>
                              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                  $320
                              </div>
                          </div>
                      </li>
                      <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                  <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                              </div>
                              <div class="flex-1 min-w-0">
                                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      Bonnie Green
                                  </p>
                                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                      email@windster.com
                                  </p>
                              </div>
                              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                  $3467
                              </div>
                          </div>
                      </li>
                      <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                  <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image" />
                              </div>
                              <div class="flex-1 min-w-0">
                                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      Michael Gough
                                  </p>
                                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                      email@windster.com
                                  </p>
                              </div>
                              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                  $67
                              </div>
                          </div>
                      </li>
                      <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                              <div class="flex-shrink-0">
                                  <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image" />
                              </div>
                              <div class="flex-1 min-w-0">
                                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      Lana Byrd
                                  </p>
                                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                      email@windster.com
                                  </p>
                              </div>
                              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                  $367
                              </div>
                          </div>
                      </li>
                  </ul>
            </div>
            </div>
          </div>
          <UserProfile />
        </div>

      </section>
    // <div className="mt-10 flex md:flex-nowrap flex-wrap justify-evenly gap-5 bg-base-200 shadow-xl py-10 rounded-lg items-center">
    //   <div className="">
    //     <img className="w-96 border-primary border-4 rounded-full h-96" src={user?.photoURL} alt="" />
    //   </div>
    //   <div className="flex flex-col gap-3">
    //       <h2 className="text-3xl text-center sm:text-left font-semibold">
    //         {
    //           isAdmin && 'Admin'
    //         }
    //         {
    //            isSeller && 'Seller'
    //         }
    //       </h2>
    //       <h1 className="text-3xl md:text-4xl font-bold">{user?.displayName}</h1>
    //       <p className="text-2xl md:text-2xl">
    //         {user?.email}
    //       </p>
    //   </div>
    // </div>
  );
};

export default Dashboard;
