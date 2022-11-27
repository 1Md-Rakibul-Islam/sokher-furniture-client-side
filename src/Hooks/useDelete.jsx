import toast from "react-hot-toast";

const useDelete = (_id, refetch) => {
    fetch(`http://localhost:5000/products/${_id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
        toast.success('Delete Successfully');
        refetch();
    })
};

export default useDelete;