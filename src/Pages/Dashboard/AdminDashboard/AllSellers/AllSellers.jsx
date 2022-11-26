import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Shared/Loading/Loading';

const AllSellers = () => {

    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/sellers`)
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

    console.log(sellers);

    return (
        <div>
            <h2 className='text-3xl mb-10'>All Sellers: {sellers.length}</h2>
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
                        {
                            sellers.map( (seller, i) =>  <tr>
                                <th>{1 + i}</th>
                                <th>
                                    <div className="avatar online">
                                        <div className="w-24 rounded-full">
                                            <img src={seller.userImage} />
                                        </div>
                                    </div>
                                </th>
                                <td>{seller.userName}</td>
                                <td>{seller.email}</td>
                                <td>
                                    <button className='btn btn-sm btn-success'>Verify</button>
                                </td>
                                <td>
                                    <button className='btn btn-sm btn-error'>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;