import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');

    const navigate = useNavigate();


    const handelSignUp = data => {
      // console.log(data);
      setSignUpError('');
      // create user
      createUser(data.email, data.password)
      .then( result => {
        const user = result.user;
        console.log(user);
        toast.success('User created Successfully')
        const userInfo = {
          displayName: data.name
        }


      })
      .catch( error => {
        setSignUpError(error.message)
        console.log(error)
      })
        
    }






    return (
        <div className="h-[700px] flex justify-center items-center">
        <div className="card border w-80 md:w-96 shadow-2xl p-7">
          <h2 className="text-xl text-center text-primary">Sign Up</h2>
          <form onSubmit={handleSubmit(handelSignUp)}>
              <div className="form-control w-full mt-5">
                  <label htmlFor="label"> <span>Name</span></label>
                  <input {...register('name', {
                    required: true
                    })}
                    className='input input-bordered'/>
                    {errors?.name && <small className="text-error mt-2">{errors.name?.message}</small>}
              </div>
              <div className="form-control w-full mt-5">
                  <label htmlFor="label"> <span>Email</span></label>
                  <input {...register('email', {
                    required: 'Email address is required'
                  })} className='input input-bordered'/>
                  {errors?.email && <small className="text-error mt-2">{errors.email?.message}</small>}
              </div>
              <div className="form-control w-full mt-5">
                  <label htmlFor="label"> <span>Password</span></label>
                  <input {...register('password', {
                    required: 'Password is required',
                    minLength: {value: 6, message: 'Password must be 6 charecters or longer'},
                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/, message: 'Password must be strong'}
                  })} className='input input-bordered' />
                  {errors.password && <small className="text-error mt-2">{errors.password?.message}</small>}
              </div>
              <div>
              {
                signUpError && <span className="my-2 text-error">{signUpError}</span>
              }
            </div>
            
            <input className="w-full mt-5 btn bg-accent text-white" type="submit" value='Sign Up' />
          </form>
          <p>Alredy have an account?<Link className="text-secondary" to='/login'>Plase Login</Link></p>
          <div className="divider">OR</div>
          <button className="btn btn-outline">CONTINUE With GOOGLE</button>
        </div>
      </div>
    );
};

export default SignUp;