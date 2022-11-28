import toast from "react-hot-toast";

const useAdUpdate = (_id, refetch) => {
  fetch(`https://sokher-furniture.vercel.app/seller/advertising/product/${_id}`, {
    method: "PUT",
  })
    .then((res) => res.json())
    .then((data) => {
      toast.success("advertising successfull");
      refetch();
    });
};

export default useAdUpdate;
