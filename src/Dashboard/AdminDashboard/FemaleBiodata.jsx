import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const FemaleBiodata = () => {
    const axiosSecure = useAxiosSecure();
    const { data: biodata = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/femalebiodata')
            return res.data;

        }
    })
    return (
        <div className="mt-7 p-7 border-4 rounded-xl border-pink-300">
            <div className="flex justify-evenly ">
                <h2 className="text-2xl font-bold">All Users</h2>
                <h2 className="text-2xl font-bold">Total Users : {biodata.length}</h2>
                {console.log(biodata)}
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Sr. No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                B ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Age
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete User
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            biodata.map((bData, idx) => <tr key={idx + 1} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {idx + 1}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {bData.BioID}
                                </th>
                                <td className="px-6 py-4">
                                    {bData.Name}
                                </td>
                                <td className="px-6 py-4">
                                    {bData.ContactEmail}
                                </td>
                                <td className="px-6 py-4">
                                    {bData.Gender}
                                </td>
                                <td className="px-6 py-4">
                                    {bData.Age}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="btn btn-sm btn-error">Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FemaleBiodata;