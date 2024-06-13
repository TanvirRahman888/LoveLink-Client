import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";



const BiodataDetails = () => {
    const loadedBiodata = useLoaderData();
    const {user} = useContext(AuthContext);

    const { Age, BioID, Gender, MaritalStatus, Name, Occupation, PermanentDivisionName, PremiumMember, ProfileImage, Religion, _id } = loadedBiodata;


    const handelAddToWishList=(bioData)=>{
        console.log(user, user?.email, bioData);
        const wishList = {
            bioDataId:_id,
            email:user.email
        }
        axios.post('http://localhost:5000/wishlist',wishList)
        .then(res=>{
            console.log(res.data);
            if (res.data.insertedId) {
                toast.success(`${Name} added in your Wish List`)
            }
        })
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