import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AllBiodata = () => {
    const axiosSecure = useAxiosSecure();
    const { data: biodata = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allbiodata')
            return res.data;

        }
    })
    const handleDeleteBiodata = async (email) => {
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
            const response = await axiosSecure.delete(`/allbiodata/${email}`);
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
            <Helmet>
                <title>LoveLink | All Biodata</title>
            </Helmet>
            <div className="flex justify-evenly ">
                <h2 className="text-2xl font-bold">All Biodata</h2>
                <h2 className="text-2xl font-bold">Total Biodata : {biodata.length}</h2>
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
                                    <button className="btn btn-sm btn-error"
                                    onClick={() => handleDeleteBiodata(bData.ContactEmail)}
                                    >Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBiodata;