import toast from "react-hot-toast";

const useDeleteUser = (_id, refetch) => {
  fetch(`https://sokher-furniture-1md-rakibul-islam.vercel.app/users/${_id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      toast.success("Delete Successfully");
      refetch();
    });
};

export default useDeleteUser;
