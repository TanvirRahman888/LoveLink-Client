import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

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
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <p>Total Users: {users.length}</p>
            <p>Total Biodata: {allBiodata.length}</p>
            <p>Total Male Biodata: {maleBiodata.length}</p>
            <p>Total Female Biodata: {femaleBiodata.length}</p>
        </div>
    );
};

export default AdminDashboard;
