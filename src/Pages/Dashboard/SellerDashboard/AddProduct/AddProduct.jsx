import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";

const AddProduct = () => {

  const { user, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  //date of publish
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  const imageHostKey = import.meta.env.VITE_imgbb_key;


  const handelAddProduct = data => {
    console.log(data);

    const image = data.photo[0];
    const formData = new FormData();
    formData.append('image', image);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imageData => {
      if(imageData.status){

        saveUser(data.category, data.name, imageData.data.url, data.location, data.originalPrice, data.reselPrice, data.useDuration, data.decription, data.sellerEmail, data.publish)

      }
    })

  };


  const saveUser = (category, name, photo, location, originalPrice, reselPrice, useDuration, decription, sellerEmail, publish) => {

    const product = {
      category,
      name,
      photo,
      location,
      originalPrice,
      reselPrice,
      useDuration,
      decription,
      sellerEmail,
      publish,
      status: 'available'
    }

    // console.log( 'saveUser', user);

      fetch('http://localhost:5000/products', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          // authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(product)
      })
      .then(res => res.json())
      .then(data => {
        console.log('save user', data);
        toast.success('Product publish Successfully');
      })
  }


  return (
    <div className="">
      <div className="hero-content my-10 mx-auto">
        <div className="card w-full shadow-2xl bg-base-500">
          <h1 className="text-4xl mt-5 text-center font-bold">Add Product</h1>
          <form onSubmit={handleSubmit(handelAddProduct)} className="card-body">
            <div className=" grid gap-3 grid-cols-1 md:grid-cols-3">

              <div className="form-control">
                <label className="label">
                  <span >Product Name</span>
                </label>
                <input {...register('name', {
                  required: 'Product Name required'
                })} type="text" placeholder="Product name" className="input input-bordered" />
                {errors?.name && <small className="text-error mt-2">{errors.name?.message}</small>}
              </div>

              <div className="form-control ">
                  <label htmlFor="label"> <span>Product Photo</span></label>
                  <input {...register('photo', {
                    required: 'Product photo required'
                  })} type="file" placeholder="photo" className="file-input file-input-bordered" />
                  {errors?.email && <small className='text-error mt-2'>{errors.email?.message}</small>}
              </div>

              <div className="form-control ">
                  <label htmlFor="label"> <span>Categories</span></label>
                  <select 
                    {...register('category', {
                      required: true
                    })}
                    className="select select-bordered ">
                    <option disabled selected>Whis is chategoriy this product?</option>
                    <option value='Bedroom' >Bedroom</option>
                    <option value='Office' >Office</option>
                    <option value='Bedroom' >Dining & Kitchen</option>

                  </select>
                  {errors?.email && <small className='text-error mt-2'>{errors.email?.message}</small>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Location</span>
                </label>
                <input {...register('location', {
                  required: 'Seller Location required'
                })} type="text" placeholder="location" className="input input-bordered" />
                {errors?.name && <small className="text-error mt-2">{errors.name?.message}</small>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Original Price</span>
                </label>
                <input {...register('originalPrice', {
                  required: 'Product original price required'
                })} type="text" placeholder="amount" className="input input-bordered" />
                {errors?.name && <small className="text-error mt-2">{errors.name?.message}</small>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Resel Price</span>
                </label>
                <input {...register('reselPrice', {
                  required: 'Product resel price required'
                })} type="text" placeholder="amount" className="input input-bordered" />
                {errors?.name && <small className="text-error mt-2">{errors.name?.message}</small>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Duration of use</span>
                </label>
                <input {...register('useDuration', {
                  required: 'Product use duration required'
                })} type="text" placeholder="duration" className="input input-bordered" />
                {errors?.name && <small className="text-error mt-2">{errors.name?.message}</small>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <input {...register('sellerEmail', {
                  required: 'Seller email required'
                })} type="text" placeholder="Seller Email" readOnly defaultValue={user?.email} className="input input-bordered" />
                {errors?.name && <small className="text-error mt-2">{errors.name?.message}</small>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Publish Date</span>
                </label>
                <input {...register('publish', {
                  required: 'Product Name required'
                })} type="text" placeholder="date" readOnly defaultValue={currentDate} className="input input-bordered" />
                {errors?.name && <small className="text-error mt-2">{errors.name?.message}</small>}
              </div>

            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Decription</span>
              </label>
              <textarea {...register('decription', {
                  required: 'Product Decription required'
                })} className="textarea textarea-primary w-full h-24" placeholder="Write a decription the product!!!"></textarea>
            </div>
            <div className="form-control mt-6 mx-auto">
              <button className="btn btn-primary ">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;