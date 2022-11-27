const useDelete = (_id, refetch) => {
    fetch(`http://localhost:5000/products/${_id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        refetch()
    })
};

export default useDelete;