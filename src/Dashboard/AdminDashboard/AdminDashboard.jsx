import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const { data: allBiodata = [], } = useQuery({
        queryKey: ['allBiodata'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allbiodata');
            return res.data;
        }
    });

    const { data: maleBiodata = [], } = useQuery({
        queryKey: ['maleBiodata'],
        queryFn: async () => {
            const res = await axiosSecure.get('/malebiodata');
            return res.data;
        }
    });

    const { data: femaleBiodata = [], } = useQuery({
        queryKey: ['femaleBiodata'],
        queryFn: async () => {
            const res = await axiosSecure.get('/femalebiodata');
            return res.data;
        }
    });
    const { data: premiummember = [], } = useQuery({
        queryKey: ['premiummember'],
        queryFn: async () => {
            const res = await axiosSecure.get('/premiummember');
            return res.data;
        }
    });
    const { data: successstory = [], } = useQuery({
        queryKey: ['successstory'],
        queryFn: async () => {
            const res = await axiosSecure.get('/successstory');
            return res.data;
        }
    });
    return (
        <div className="p-5 m-5 border-4 border-pink-300 rounded-xl">
            <h2 className="text-center font-bold text-4xl">Admin Dashboard</h2>
            <hr className="border-2 border-dotted border-pink-600 m-5"/>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly">

                <Link to={'/dashboard/alluser'} className=" m-4"> <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-2xl font-bold p-4 rounded-xl"><p>Total Users: {users.length}</p></div></Link>
                <Link to={'/dashboard/allbiodata'} className=" m-4"> <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-2xl font-bold p-4 rounded-xl"><p>Total Biodata: {allBiodata.length}</p></div></Link>
                <Link to={'/dashboard/malebiodata'} className=" m-4"> <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-2xl font-bold p-4 rounded-xl"><p>Total Male Biodata: {maleBiodata.length}</p></div></Link>
                <Link to={'/dashboard/femalebiodata'} className=" m-4"> <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-2xl font-bold p-4 rounded-xl"><p>Total Female Biodata: {femaleBiodata.length}</p></div></Link>
                <Link to={''} className=" m-4"> <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-2xl font-bold p-4 rounded-xl"><p>Total Premium Member: {premiummember.length}</p></div></Link>
                <Link to={''} className=" m-4"> <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-2xl font-bold p-4 rounded-xl"><p>Total Happy Customers: {successstory.length}</p></div></Link>
            </div>
        </div>
    );
};

export default AdminDashboard;
