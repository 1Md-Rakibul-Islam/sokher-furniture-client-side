import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const DashboardNav = () => {
    const { user, logOut } = useContext(AuthContext);

    const handelLogOut = () => {
      logOut().then().catch();
    };
  
    return (
          <div className="navbar glass z-30 fixed">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </label>
                <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                      <a>
                      Categories
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                      </a>
                      <ul className="p-6 gap-2 bg-base-100 z-100">
                        <Link to={'/categories/Bedroom'}>Bedroom</Link>
                        <Link to={'/categories/Office'}>Office</Link>
                        <Link to={'/categories/Dining%20&%20Kitchen'}>Dining Kichen</Link>
                      </ul>
                    </li>
      
                    <li>
                      <Link to={"/products"}>Products</Link>
                    </li>
      
                  {user?.email ? (
                    <>
                      <li>
                        <Link to={"/dashboard"}>Dashboard</Link>
                      </li>
                      <li>
                        <button onClick={handelLogOut}>Logout</button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link to={"/login"}>Login</Link>
                      </li>
                      <li>
                        <Link to={"/signup"}>Sign Up</Link>
                      </li>
                    </>
                  )}
      
                </ul>
              </div>
              <a className="btn btn-ghost normal-case text-xl"><span className="text-4xl text-primary">s</span>okher <span className="text-3xl text-primary"> F</span>urniture</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal p-0">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                      <a>
                        Categories
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                      </a>
                      <ul className="p-5 bg-base-100 z-100">
                        <Link to={'/categories/Bedroom'}>Bedroom</Link>
                        <Link to={'/categories/Office'}>Office</Link>
                        <Link to={'/categories/Dining%20&%20Kitchen'}>Dining Kichen</Link>
                      </ul>
                    </li>
                <li>
                  <Link to={"/products"}>Products</Link>
                </li>
      
                {user?.email ? (
                  <>
                  <li>
                      <Link to={"/dashboard"}>Dashboard</Link>
                  </li>
                    <li>
                      <button onClick={handelLogOut}>Logout</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to={"/login"}>Login</Link>
                    </li>
                    <li>
                      <Link to={"/signup"}>Sign Up</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="navbar-end">
              <div className="dropdown dropdown-end">
              <label tabIndex={3} className="btn btn-ghost lg:hidden">
                <label htmlFor="dashboard-drawer" className="drawer-button lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                    </label>
                </label>
              </div>
            </div>
          </div>
    )};

export default DashboardNav;