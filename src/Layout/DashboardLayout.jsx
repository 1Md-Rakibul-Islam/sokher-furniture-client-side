import React, { useContext } from 'react';
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';
import Loading from '../Pages/Shared/Loading/Loading';
import NavBar from '../Pages/Shared/NavBar/NavBar';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);


    if(isBuyerLoading || isSellerLoading || isAdminLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content md:px-10 px-5 mt-20 ">
                    <Outlet></Outlet>
                </div> 
                <div className="drawer-side mt-20">
                    <label htmlFor="dashboard-drawer " className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 bg-base-200">
                        {
                            isBuyer && <>
                                <li><Link to='/dashboard/buyer/wishlist'>Wishlist</Link></li>
                                <li><Link to='/dashboard/buyer/myOrders'>My Orders</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link to='/dashboard/seller/addProduct'>Add Product</Link></li>
                                <li><Link to='/dashboard/seller/myProducts'>My Products</Link></li>
                                <li><Link to='/dashboard/seller/myBuyers'>My Buyers</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/admin/allSellrs'>All Sellers</Link></li>
                                <li><Link to='/dashboard/admin/allUsers'>All Users</Link></li>
                                <li><Link to='/dashboard/admin/reportedItems'>Reported Items</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>        
        </div>
    );
};

export default DashboardLayout;