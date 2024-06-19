import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import Swal from 'sweetalert2';
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useWishList from "../../Hooks/useWishList";
import MemberCard from "../Common/MemberCard";

const BiodataDetails = () => {
    const loadedBiodata = useLoaderData();
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [wishListData, refetch] = useWishList();
    const [similarBiodata, setSimilarBiodata] = useState([]);
    
    const { Age, BioID, Gender, Name, Occupation, PermanentDivisionName, PremiumMember, ProfileImage, Religion, _id } = loadedBiodata;

    useEffect(() => {
        const similarBiodata = async () => {        
                const res = await axiosSecure.get(`/biodata/similar/${_id}`);
                setSimilarBiodata(res.data);
            
        };

        similarBiodata();
    }, [_id]);

    const handleAddToWishList = () => {
        const wishList = {
            bioDataId: _id,
            DataId: BioID,
            email: user.email,
            name: Name,
            PermanentAddress: PermanentDivisionName,
            Occupation: Occupation
        };

        Swal.fire({
            title: "Are you sure to add Wish List?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Confirm!"
        }).then((result) => {
            if (result.isConfirmed) {
                if (wishListData.find(bio => bio.bioDataId === _id)) {
                    return toast.error(`${Name} already added in your Wish List`);
                }
                axiosSecure.post('/wishlist', wishList)
                    .then(res => {
                        if (res.data.insertedId) {
                            toast.success(`${Name} added in your Wish List`);
                        }
                    })
                    .catch(error => {
                        console.error("Error adding to wishlist:", error);
                        toast.error("Failed to add to wishlist");
                    });
                refetch();
            }
        });
    };

    return (
        <div className="">
            <p className="font-bold">Name : {Name} </p><br />
            <p className="font-bold">Occupation : {Occupation} </p><br />
            <p className="font-bold">Gender : {Gender} </p><br />
            <p className="font-bold">Age : {Age} </p><br />
            <p className="font-bold">Religion : {Religion} </p><br />
            <p className="font-bold">Permanent Division Name : {PermanentDivisionName} </p><br />
            <p className="font-bold">PremiumMember : {PremiumMember} </p><br />
            <img src={ProfileImage} alt="" />
            <button onClick={handleAddToWishList} className="btn">Add to wish list</button>

            <h3 className="mt-5 text-xl font-bold">Similar Biodata</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {similarBiodata.length > 0 ? (
                    similarBiodata.map(member => (
                        <MemberCard key={member.BioID} member={member}></MemberCard>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Finding the most similar Biodata...</p>
                )}
            </div>
        </div>
    );
};

export default BiodataDetails;
