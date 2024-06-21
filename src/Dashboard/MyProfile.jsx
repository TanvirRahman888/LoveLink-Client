
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const [biodata, setBiodata] = useState(null);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const fetchBiodata = async () => {
            const response = await axiosSecure.get(`/myprofile/${user.email}`);
            setBiodata(response.data);
        };

        fetchBiodata();
    }, [user.email]);

    return (
        <div>
            <h2 className='text-6xl'>My Profile</h2>
            {biodata && (
                <div>
                    <p className="text-2xl">Name: <span className="font-bold ml-2">{biodata.Name}</span></p>
                    <p className="text-2xl">Gender: <span className="font-bold ml-2">{biodata.Gender}</span></p>
                    <p className="text-2xl">Profile Image: <img src={biodata.ProfileImage} alt="Profile" /></p>
                    <p className="text-2xl">Date of Birth: <span className="font-bold ml-2">{biodata.DateOfBirth}</span></p>
                    <p className="text-2xl">Height: <span className="font-bold ml-2">{biodata.Height}</span></p>
                    <p className="text-2xl">Weight: <span className="font-bold ml-2">{biodata.Weight}</span></p>
                    <p className="text-2xl">Age: <span className="font-bold ml-2">{biodata.Age}</span></p>
                    <p className="text-2xl">Occupation: <span className="font-bold ml-2">{biodata.Occupation}</span></p>
                    <p className="text-2xl">Race: <span className="font-bold ml-2">{biodata.Race}</span></p>
                    <p className="text-2xl">Father's Name: <span className="font-bold ml-2">{biodata.FathersName}</span></p>
                    <p className="text-2xl">Mother's Name: <span className="font-bold ml-2">{biodata.MothersName}</span></p>
                    <p className="text-2xl">Permanent Division Name: <span className="font-bold ml-2">{biodata.PermanentDivisionName}</span></p>
                    <p className="text-2xl">Present Division Name: <span className="font-bold ml-2">{biodata.PresentDivisionName}</span></p>
                    <p className="text-2xl">Expected Partner Age: <span className="font-bold ml-2">{biodata.ExpectedPartnerAge}</span></p>
                    <p className="text-2xl">Expected Partner Height: <span className="font-bold ml-2">{biodata.ExpectedPartnerHeight}</span></p>
                    <p className="text-2xl">Expected Partner Weight: <span className="font-bold ml-2">{biodata.ExpectedPartnerWeight}</span></p>
                    <p className="text-2xl">Email: <span className="font-bold ml-2">{biodata.ContactEmail}</span></p>
                    <p className="text-2xl">Mobile Number: <span className="font-bold ml-2">{biodata.MobileNumber}</span></p>
                </div>
            )}
        </div>
    );
};

export default MyProfile;
