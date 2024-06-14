import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";




const useWishList = () => {
    const axiosSecure =useAxiosSecure();
    const {user}=useContext(AuthContext)
    const { data: wishListData = [] , refetch} = useQuery({
        queryKey: ['wishListData', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/wishlist?email=${user?.email}`)
            return res.data
            }


    })
    return [wishListData,refetch]
};

export default useWishList;