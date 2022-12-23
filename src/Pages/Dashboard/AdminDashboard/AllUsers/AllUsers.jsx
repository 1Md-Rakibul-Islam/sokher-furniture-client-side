import { useQuery } from "@tanstack/react-query";
import React from "react";
import useDeleteUser from "../../../../Hooks/useDeleteUser";
import useAdmin from "../../../../Hooks/useAdmin";
import Loading from "../../../Shared/Loading/Loading";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";

const AllUsers = () => {
  // 'https://sokher-furniture-1md-rakibul-islam.vercel.app/users'

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`https://sokher-furniture-1md-rakibul-islam.vercel.app/users`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-center text-3xl my-5">All Users: {users.length}</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Role</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i}>
                <th>{1 + i}</th>
                <th>{user.role}</th>
                <th>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={user.userImage} />
                    </div>
                  </div>
                </th>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    ""
                  ) : (
                    <button onClick={() => useDeleteUser(user._id, refetch)} className="btn btn-sm btn-error">
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
