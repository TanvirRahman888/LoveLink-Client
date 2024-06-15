import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
// import { axiosSecure } from "../../Hooks/useAxiosSecure";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useWishList from "../../Hooks/useWishList";



const BiodataDetails = () => {
    const loadedBiodata = useLoaderData();
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [wishListData,refetch]=useWishList();
    // const [wishListData]=useWishList();

    
    const { Age, BioID, Gender, Name, Occupation, PermanentDivisionName, PremiumMember, ProfileImage, Religion, _id } = loadedBiodata;

    const handelAddToWishList=()=>{
        console.log(user, user?.email);
        const wishList = {
            bioDataId:_id,
            DataId:BioID,
            email:user.email,
            name:Name, 
            PermanentAddress:PermanentDivisionName,
            Occupation:Occupation
        }
        Swal.fire({
            title: "Are you sure to add Wish List?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Confirm!"
          }).then((result) => {
            if (result.isConfirmed) {
                if (wishListData.find(bio=>bio.bioDataId==_id)) {
                    return toast.error(`${Name} already added in your Wish List`)
                }
                axiosSecure.post('/wishlist',wishList)
                .then(res=>{
                    console.log(res.data);
                    if (res.data.insertedId) {
                        toast.success(`${Name} added in your Wish List`)
                    }
                })
                refetch()
            }
          });
        
    }
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
            {console.log(loadedBiodata)}
            <button onClick={handelAddToWishList} className="btn">Add to wish list</button>
        </div>
    );
};

export default BiodataDetails;