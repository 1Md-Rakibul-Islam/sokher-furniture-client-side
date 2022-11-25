import React, { useContext } from 'react';
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useSeller from '../Hooks/useSeller';
import NavBar from '../Pages/Shared/NavBar/NavBar';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    console.log(isSeller);

    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            isSeller && <>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li><Link to='/dashboard/adddoctor'>Add a Doctor</Link></li>
                                <li><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>        
        </div>
    );
};

export default DashboardLayout;