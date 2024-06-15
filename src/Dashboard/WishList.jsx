import useWishList from "../Hooks/useWishList";


const WishList = () => {
    const [wishListData] = useWishList();
    console.log(wishListData);
    return (
        <div>
            <div className="flex justify-center my-5">
                <h2 className="text-4xl font-bold mt-5">My Wish List</h2>
            </div>
            <div>
                <p>wishListData {wishListData.length}</p>
            </div>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Sr
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Biodata Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Permanent Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Occupation
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">X</a>
                            </td>
                        </tr> */}
                        {
                            wishListData.map((bioData, idx) => <tr key={bioData._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">

                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {idx + 1}
                                </th>
                                <td className="px-6 py-4">
                                    {bioData.DataId}
                                </td>
                                <td className="px-6 py-4">
                                    {bioData.name}
                                </td>
                                <td className="px-6 py-4">
                                    {bioData.PermanentAddress}
                                </td>
                                <td className="px-6 py-4">
                                    {bioData.Occupation}
                                </td>
                                <td className="px-6 py-4">
                                    <button className="btn">Delete</button>
                                    <button className="btn">View Profile</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default WishList;