import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Shared/Loading/Loading';

const AllUsers = () => {
    // 'http://localhost:5000/users'

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/users`)
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>All Users: {users.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users.map( (user, i) =>  <tr key={i}>
                                <th>{1 + i}</th>
                                <th>
                                    <div className="avatar online">
                                        <div className="w-24 rounded-full">
                                            <img src={user.userImage} />
                                        </div>
                                    </div>
                                </th>
                                <td>{user.userName}</td>
                                <td>{user.email}</td>
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

export default AllUsers;