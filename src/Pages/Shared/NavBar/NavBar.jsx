import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut().then().catch();
  };

  return (
    <div className="navbar mb-10 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/categories"}>Categories</Link>
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

            <li>
              <Link to={"/blogs"}>Blogs</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Furniture</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/categories"}>Categories</Link>
          </li>
          <li>
            <Link to={"/blogs"}>Blogs</Link>
          </li>

          {user?.email ? (
            <>
            <li>
                <Link to={"/myOrders"}>My Orders</Link>
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
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">{user?.email ? <img src={user?.photoURL} /> : <FaUser className="text-3xl text-center"></FaUser>}</div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a className="justify-between">{user?.displayName}</a>
            </li>
            <li>
              <a className="justify-between">{user?.email}</a>
            </li>
            {user?.email ? (
              <li>
                <button onClick={handelLogOut}>Logout</button>
              </li>
            ) : (
              <Link to={"/login"}>
                <li>
                  <button>Login</button>
                </li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
