import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import React, { useContext } from "react";
import Loading from "../../../Shared/Loading/Loading";
import useDelete from "../../../../Hooks/useDelete";

const ReportedItems = () => {
  const {
    data: reportedProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reportedProducts"],
    queryFn: async () => {
      const res = await fetch("https://sokher-furniture-1md-rakibul-islam.vercel.app/product/report");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleDeleteRepotedProduct = (reportedProductId, reportId) => {
    useDelete(reportedProductId, refetch);
    reportDelete(reportId);
    refetch();
  };

  const reportDelete = (reportId) => {
    fetch(`https://sokher-furniture-1md-rakibul-islam.vercel.app/product/report/${reportId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  return (
    <div>
      <h2 className="text-center text-3xl my-5">Reported Products: {reportedProducts.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Used</th>
              <th>Seller</th>
              <th>Repoter</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reportedProducts.map((product, i) => (
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
                <td>{product.reselPrice} TK</td>
                <td>{product.useDuration}</td>
                <td>
                  <h5>{product.sellerName}</h5>
                  <h5>{product.sellerEmail}</h5>
                </td>
                <td>
                  <h5>{product.repoterName}</h5>
                  <h5>{product.repoterEmail}</h5>
                </td>
                <td>
                  <button onClick={() => handleDeleteRepotedProduct(product.reportedProductId, product._id)} className="btn btn-sm btn-error">
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

export default ReportedItems;
