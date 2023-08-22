import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useToken from "../../Hooks/useToken";
import { GoogleAuthProvider } from "firebase/auth";
import useBuyer from "../../Hooks/useBuyer";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUser, loginProvider, setLoading } =
    useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const [buyer, setBuyer] = useState("");
  const [isBuyer, isBuyerLoading] = useBuyer(buyer);

  // console.log(token, "gvjvhh");

  if (token) {
    navigate("/");
  }

  const handelSignUp = (data) => {
    console.log(data);
    const imageHostKey = import.meta.env.VITE_imgbb_key;

    setSignUpError("");
    // create user
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        const image = data.photo[0];
        const formData = new FormData();
        formData.append("image", image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((imageData) => {
            if (imageData.status) {
              const userInfo = {
                displayName: data.name,
                photoURL: imageData.data.url,
              };

              updateUser(userInfo)
                .then(() => {
                  saveUser(
                    data.option,
                    data.name,
                    data.email,
                    imageData.data.url
                  );
                })
                .catch((error) => console.log(error));
            }
          });
      })
      .catch((error) => {
        setSignUpError(error.message);
        console.log(error);
      });
  };

  // google login

  const handelGoogleLogin = () => {
    loginProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        // console.log(user.email);
        setBuyer(user.email);
        // if (isBuyerLoading) {
        //   return <Loading></Loading>
        // }
        // console.log('buy:', buyer)
        saveUser("buyer", user?.displayName, user?.email, user?.photoURL);

        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // save profile on db
  const saveUser = (role, userName, email, userImage) => {
    const user = {
      role,
      userName,
      email,
      userImage,
    };

    // console.log( 'saveUser', user);

    fetch("https://sokher-furniture-1md-rakibul-islam.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("save user", data);
        setCreatedUserEmail(email);
        toast.success("User created Successfully");
        console.log(email);
      });
  };

  return (
    <section
      style={{
        backgroundImage: "url(https://i.ibb.co/GxzQmwJ/banner.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="md:w-[800px] md:mx-auto mx-5 h-[720px] min-h-screen flex justify-center items-center">
        <div className="card w-full backdrop-blur-md border shadow-2xl p-7">
          <h2 className="text-3xl my-5 text-center text-primary">Sign Up</h2>
          <form onSubmit={handleSubmit(handelSignUp)} calssName="card">
            <div className="grid justify-center gap-3 grid-cols-1 md:grid-cols-2">
              <div className="form-control text-white">
                <label htmlFor="label">
                  <span>Name</span>
                </label>
                <input
                  {...register("name", {
                    required: true,
                  })}
                  className="input input-bordered"
                />
                {errors?.name && (
                  <small className="text-error mt-2">
                    {errors.name?.message}
                  </small>
                )}
              </div>
              <div className="form-control text-white">
                <label htmlFor="label">
                  <span>Photo</span>
                </label>
                <input
                  {...register("photo", {
                    required: true,
                  })}
                  type="file"
                  className="file-input file-input-bordered"
                />
                {errors?.email && (
                  <small className="text-error mt-2">
                    {errors.email?.message}
                  </small>
                )}
              </div>
              <div className="form-control text-white">
                <label htmlFor="label">
                  <span>Buyer/Seller</span>
                </label>
                <select
                  {...register("option", {
                    required: true,
                  })}
                  className="select select-bordered"
                >
                  <option disabled selected>
                    Whis account are you want to create?
                  </option>
                  <option value="buyer" selected>
                    Buyer
                  </option>
                  <option value="seller">Seller</option>
                </select>
                {errors?.email && (
                  <small className="text-error mt-2">
                    {errors.email?.message}
                  </small>
                )}
              </div>
              <div className="form-control text-white">
                <label htmlFor="label">
                  <span>Email</span>
                </label>
                <input
                  {...register("email", {
                    required: "Email address is required",
                  })}
                  className="input input-bordered"
                />
                {errors?.email && (
                  <small className="text-error mt-2">
                    {errors.email?.message}
                  </small>
                )}
              </div>
              <div className="form-control text-white">
                <label htmlFor="label">
                  <span>Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 charecters or longer",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/,
                      message:
                        "Password must be strong minimum one A-Z character and one spical symbol",
                    },
                  })}
                  className="input input-bordered"
                />
                {errors.password && (
                  <small className="text-error mt-2">
                    {errors.password?.message}
                  </small>
                )}
              </div>
              <div>
                {signUpError && (
                  <span className="my-2 text-error">{signUpError}</span>
                )}
              </div>
            </div>

            <div className="text-center text-white">
              <input
                className=" mt-5 btn btn-primary text-white"
                type="submit"
                value="Sign Up"
              />
              <p>
                Alredy have an account? 
                <Link className="text-blue-600 ml-2 underline" to="/login">
                   Plase Login
                </Link>
              </p>
            </div>
          </form>

          <div className="divider">OR</div>
          <div className="mx-auto">
            <button
              onClick={handelGoogleLogin}
              className="btn text-3xl text-success btn-outline btn-circle"
            >
              <FaGoogle></FaGoogle>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
