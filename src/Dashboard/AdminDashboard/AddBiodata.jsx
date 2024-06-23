import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Pages/AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AddBiodata = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);
        data.Email = user.email; 
        const response = await axiosSecure.post('/biodata', data);
        console.log("Response data:", response.data);

        if (response.data.insertedId) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Biodata Added Successfully",
                showConfirmButton: false,
                timer: 1500
            });

            reset(); 
            navigate("/dashboard/allbiodata");
        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Failed to Add Biodata",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <div>
            <Helmet>
                <title>LoveLink | Add Biodata</title>
            </Helmet>
            <h2 className="text-6xl">Add Biodata</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block mb-1">Gender</label>
                    <select {...register("Gender")} required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1">Name</label>
                    <input type="text" {...register("Name")} required />
                </div>
                <div>
                    <label className="block mb-1">Profile Image Link</label>
                    <input type="text" {...register("ProfileImage")} />
                </div>
                <div>
                    <label className="block mb-1">Date of Birth</label>
                    <input type="date" {...register("DateOfBirth")} required />
                </div>
                <div>
                    <label className="block mb-1">Height</label>
                    <select {...register("Height")} required>
                        <option value="">Select Height</option>
                        <option value="4.10">4.10</option>
                        <option value="5.0">5.0</option>
                        <option value="5.1">5.1</option>
                        <option value="5.2">5.2</option>
                        <option value="5.3">5.3</option>
                        <option value="5.4">5.4</option>
                        <option value="5.5">5.5</option>
                        <option value="5.6">5.6</option>
                        <option value="5.7">5.7</option>
                        <option value="5.8">5.8</option>
                        <option value="5.9">5.9</option>
                        <option value="5.10">5.10</option>
                        <option value="5.11">5.11</option>
                        <option value="6.0">6.0</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1">Weight</label>
                    <select {...register("Weight")} required>
                        <option value="">Select Weight</option>
                        <option value="50-">50-</option>
                        <option value="50-55">50-55</option>
                        <option value="56-60">56-60</option>
                        <option value="61-65">61-65</option>
                        <option value="66-70">66-70</option>
                        <option value="71-75">71-75</option>
                        <option value="76-80">76-80</option>
                        <option value="81-85">81-85</option>
                        <option value="85+">85+</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1">Age</label>
                    <input type="number" {...register("Age")} required />
                </div>
                <div>
                    <label className="block mb-1">Occupation</label>
                    <select {...register("Occupation")} required>
                        <option value="">Select Occupation</option>
                        <option value="GovtJob">Govt Job</option>
                        <option value="PrivateJob">Private Job</option>
                        <option value="Business">Business</option>
                        <option value="Freelancer">Freelancer</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1">Race</label>
                    <select {...register("Race")} required>
                        <option value="">Select Race</option>
                        <option value="Dhaka">Dhaka</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1">Father Name</label>
                    <input type="text" {...register("FathersName")} />
                </div>
                <div>
                    <label className="block mb-1">Mother Name</label>
                    <input type="text" {...register("MothersName")} />
                </div>
                <div>
                    <label className="block mb-1">Permanent Division Name</label>
                    <select {...register("PermanentDivisionName")} required>
                        <option value="">Select Division</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattagram">Chattagram</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Maymansign">Maymansign</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1">Present Division Name</label>
                    <select {...register("PresentDivisionName")} required>
                        <option value="">Select Division</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattagram">Chattagram</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Maymansign">Maymansign</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1">Expected Partner Age</label>
                    <input type="number" {...register("ExpectedPartnerAge")} />
                </div>
                <div>
                    <label className="block mb-1">Expected Partner Height</label>
                    <select {...register("ExpectedPartnerHeight")}>
                        <option value="">Select Height</option>
                        <option value="4.10">4.10</option>
                        <option value="5.0">5.0</option>
                        <option value="5.1">5.1</option>
                        <option value="5.2">5.2</option>
                        <option value="5.3">5.3</option>
                        <option value="5.4">5.4</option>
                        <option value="5.5">5.5</option>
                        <option value="5.6">5.6</option>
                        <option value="5.7">5.7</option>
                        <option value="5.8">5.8</option>
                        <option value="5.9">5.9</option>
                        <option value="5.10">5.10</option>
                        <option value="5.11">5.11</option>
                        <option value="6.0">6.0</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1">Expected Partner Weight</label>
                    <select {...register("ExpectedPartnerWeight")}>
                        <option value="">Select Weight</option>
                        <option value="50-">50-</option>
                        <option value="50-55">50-55</option>
                        <option value="56-60">56-60</option>
                        <option value="61-65">61-65</option>
                        <option value="66-70">66-70</option>
                        <option value="71-75">71-75</option>
                        <option value="76-80">76-80</option>
                        <option value="81-85">81-85</option>
                        <option value="85+">85+</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1">Contact Number</label>
                    <input type="text" {...register("ContactNumber")} required />
                </div>
                <div>
                    <label className="block mb-1">Contact Email</label>
                    <input type="email" {...register("ContactEmail")} required />
                </div>
                <div>
                    <label className="block mb-1">Religion</label>
                    <input type="text" {...register("Religion")} required />
                </div>
                <div>
                    <label className="block mb-1">Marital Status</label>
                    <select {...register("MaritalStatus")} required>
                        <option value="">Select Status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">
                    Add Biodata
                </button>
            </form>
        </div>
    );
};


export default AddBiodata;