import React from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Router/Context/AuthProvider/AuthProvider";
import { TabTitle } from "../../TabTitle/TabTitle";
import Review from "../Review/Review";

const productDetails = () => {


  const { _id, productName, price, image, about, rating, comment } = useLoaderData();
  const { user, setLoading } = useContext(AuthContext);



  return (
    <div className="p-10">
      <h2 className="text-center text-warning my-5 text-4xl">product Details</h2>
      <div className="hero min-h-screen my-5 bg-base-200">
        <div className="hero-content flex flex-col justify-between items-start lg:flex-row">
          <div className="">
            <div className="card grid md:grid-cols-2 grid-cols-1 lg:card-side bg-base-100 shadow-xxl ">
              <figure className="">
                <img className="" src={image} alt="image" />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">
                  {productName}
                  <div className="badge badge-warning">
                    Rating: {rating}
                    <input type="radio" name="rating-1" className="mask mask-star" checked />
                  </div>
                </h2>
                <p>{about}</p>
                <div className="flex justify-between items-center">
                  <div className="badge p-2 badge-secondary">
                    <p>Price: {price}</p>
                  </div>
                  <Link to={`/products/${_id}`}>
                    <button className="btn btn-primary ">Checkout</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={`card shadow-xl ${user?.email ? "block" : "hidden"}`}>
              <form onSubmit={handelOnRivew} className="card-body">
                <div className="grid gap-2 md:grid-cols-3 justify-center grid-cols-1">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" defaultValue={user?.displayName} className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" required defaultValue={user?.email} className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <input type="text" name="rating" placeholder="reating" required className="input input-bordered" />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Comment</span>
                  </label>
                  <textarea
                    name="comment"
                    type="text"
                    className="textarea textarea-primary w-full h-24"
                    placeholder="Sheare your experience!!!"
                    required
                  ></textarea>
                </div>
                <div className="form-control mt-6 mx-auto">
                  <button type="submit" name="submit" className="btn btn-primary ">
                    Rivew Submit
                  </button>
                  <Toaster></Toaster>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center">If you add or delete review. plase refresh the page</p>
      <div className="overflow-x-auto my-4 flex justify-center justify-items-center ">
        <table className="table">
          <Review _id={_id}></Review>
        </table>
      </div>
    </div>
  );
};

export default productDetails;
