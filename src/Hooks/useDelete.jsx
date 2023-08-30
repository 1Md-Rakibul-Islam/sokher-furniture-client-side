import toast from "react-hot-toast";

const useDelete = (_id, refetch) => {
  fetch(
    `https://sokher-furniture-1md-rakibul-islam.vercel.app/products/${_id}`,
    {
      method: "DELETE",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      toast.success("Delete Successfully");
      refetch();
    });
};

export default useDelete;
