import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import useDelete from "../../../../Hooks/useDelete";
import Loading from "../../../Shared/Loading/Loading";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await fetch(
        `https://sokher-furniture-1md-rakibul-islam.vercel.app/seller/products?email=${user.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handelAdvertisigProduct = (_id, refetch) => {
    if (!_id) {
      return <Loading></Loading>;
    }

    fetch(
      `https://sokher-furniture-1md-rakibul-islam.vercel.app/seller/advertising/product/${_id}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("advertising successfull");
          refetch();
        }
        console.log(data);
      });
  };

  return (
    <div>
      <h2 className="text-center text-3xl my-5">
        My Products: {products.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Status</th>
              <th>Price</th>
              <th>Publish</th>
              <th>Status</th>
              <th>Advertisig</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr>
                <th>{1 + i}</th>
                <th>
                  <div className="avatar">
                    <div className="w-32 h-24 rounded">
                      <img src={product.photo} />
                    </div>
                  </div>
                </th>
                <td>{product.name}</td>
                <td>{product.status}</td>
                <td>{product.reselPrice} TK</td>
                <td>{product.publish}</td>
                <td>{product.status}</td>
                <td>
                  {!product?.advertising && (
                    <button
                      onClick={() =>
                        handelAdvertisigProduct(product._id, refetch)
                      }
                      className="btn btn-sm btn-success"
                    >
                      Advertising
                    </button>
                  )}
                  {product?.advertising && (
                    <button disabled className="btn btn-sm ">
                      Advertised
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => useDelete(product._id, refetch)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
