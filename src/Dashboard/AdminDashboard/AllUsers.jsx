
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleDeleteUser = async (email) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        if (result.isConfirmed) {
            const response = await axiosSecure.delete(`/users/${email}`);
            if (response.data.success) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                refetch();
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Your file was not deleted.",
                    icon: "error"
                });
            }

        }
    };
    return (
        <div className="mt-7 p-7 border-4 rounded-xl border-pink-300">
            <div className="flex justify-evenly ">
                <h2 className="text-2xl font-bold">All Users</h2>
                <h2 className="text-2xl font-bold">Total Users : {users.length}</h2>
                {console.log(users)}
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Sr. No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Make Admin
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete User
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, idx) => (
                            <tr key={user.ContactEmail} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {idx + 1}
                                </th>
                                <td className="px-6 py-4">
                                    {user.Name}
                                </td>
                                <td className="px-6 py-4">
                                    {user.ContactEmail}
                                </td>
                                <td className="px-6 py-4">
                                    <button className="btn btn-sm btn-success">Make Admin</button>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button
                                        className="btn btn-sm btn-error"
                                        onClick={() => handleDeleteUser(user.ContactEmail)}
                                    >
                                        Delete User
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

export default AllUsers;