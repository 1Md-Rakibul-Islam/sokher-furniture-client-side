import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useDeleteUser from "../../../../Hooks/useDeleteUser";
import Loading from "../../../Shared/Loading/Loading";
import { FaCheckCircle } from "react-icons/fa";

const AllSellers = () => {
  const {
    data: sellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(`https://sokher-furniture-1md-rakibul-islam.vercel.app/sellers`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleVerify = (_id, refetch) => {
    fetch(`https://sokher-furniture-1md-rakibul-islam.vercel.app/sellers/verify/${_id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          toast.success("Verify successfull");
          refetch();
        }
      });
    console.log(_id);
  };

  return (
    <div>
      <h2 className="text-3xl mb-10">All Sellers: {sellers.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Verify</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr>
                <th>{1 + i}</th>
                <th>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={seller.userImage} />
                    </div>
                    {seller?.verified && <FaCheckCircle className="text-xl text-blue-400"></FaCheckCircle>}
                  </div>
                </th>
                <td>{seller.userName}</td>
                <td>{seller.email}</td>
                <td>
                  {seller?.verified === true ? (
                    ""
                  ) : (
                    <button onClick={() => handleVerify(seller._id, refetch)} className="btn btn-sm btn-success">
                      Verify
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={() => useDeleteUser(seller._id)} className="btn btn-sm btn-error">
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

export default AllSellers;
