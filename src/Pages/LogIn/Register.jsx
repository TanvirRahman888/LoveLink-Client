import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const { googleSignIn } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()

    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                toast.success("Log in Success with Google");
                const userInfo = {
                    Name: result.user?.displayName,
                    ContactEmail: result.user?.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log("User created in database. ", res.data);
                        if (res.data.insertedId) {
                            toast.success('User created successfully!');
                            axiosPublic.post('/biodata', userInfo)
                                .then(res => {
                                    console.log("User created in database. ", res.data);
                                    if (res.data.insertedId) {
                                        toast.success('Biodata created successfully!');
                                    }
                                    navigate(from, { replace: true });
                                })
                        }
                        navigate(from, { replace: true });
                    })

            })
    }



    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const password = watch("Password");

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        createUser(data.Email, data.Password)
            .then(result => {
                const loggedUser = result.user;
                toast.success('User created successfully!');
                updateUserProfile(data.Name, data.Photo)
                    .then(() => {
                        const userInfo = {
                            Name: data.Name,
                            ContactEmail: data.Email
                        }

                        axiosPublic.post('/biodata', userInfo)
                            .then(res => {
                                console.log("User created in database. ", res.data);
                                if (res.data.insertedId) {
                                    // navigate(from, { replace: true });
                                    toast.success('Biodata created successfully!');
                                    console.log('loggedUser', loggedUser);
                                    axiosPublic.post('/users', userInfo)
                                        .then(res => {
                                            console.log("User created in database. ", res.data);
                                            if (res.data.insertedId) {
                                                navigate(from, { replace: true });
                                                toast.success('User created successfully!');
                                                console.log('loggedUser', loggedUser);
                                                reset();
                                            }
                                        })
                                }
                            })
                    })
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error creating user: ", errorCode, errorMessage);
                console.log("Error creating user: ", errorCode, errorMessage);
                console.log("Could not create user.")
                toast.error("Could not create user.")
            });

    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[url('https://i.ibb.co/0y2RJ5w/Computer-login-amico.png')] bg-cover" >
            <Helmet>
                <title>LoveLink | Register</title>
            </Helmet>
            <div className="p-4 w-2/3 md:w-1/2 bg-white bg-opacity-90 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <h5 className="text-xl font-medium text-center text-gray-900 dark:text-white">Sign Up in to our platform</h5>
                    <div>
                        <label className="block mb-2 font-bold text-gray-900 dark:text-white">Your Name</label>
                        <input type="text" {...register("Name", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your Name" />
                        {errors.Name && <span className="text-red-500">Name is required</span>}
                    </div>
                    <div>
                        <label className="block mb-2 font-bold text-gray-900 dark:text-white">Photo URL</label>
                        <input type="url" {...register("Photo", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Photo URL" />
                        {errors.Photo && <span className="text-red-500">Photo is required</span>}
                    </div>
                    {/* Gender
                    <div>
                        <label className="block mb-2 font-bold text-gray-900 dark:text-white">Gender</label>
                        <select {...register("Gender", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                            <option value="" className="disabled">Select...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        {errors.Gender && <span className="text-red-500">Gender is required</span>}
                    </div> */}
                    <div>
                        <label className="block mb-2 font-bold text-gray-900 dark:text-white">Your Email</label>
                        <input type="email" {...register("Email", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
                        {errors.Email && <span className="text-red-500">Email is required</span>}
                    </div>
                    <div className="relative">
                        <label className="block mb-2 font-bold text-gray-900 dark:text-white">Your Password</label>
                        <input type={showPassword ? "text" : "password"} {...register("Password", {
                            required: true,
                            minLength: 8,
                            maxLength: 20,
                            pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+}{><?}])[A-Za-z\d@$!%*?&]/
                        })} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        {errors.Password?.type === "required" && <span className="text-red-500">Password is required</span> ||
                            errors.Password?.type === "minLength" && <span className="text-red-500">Password is minimum 8 character</span> ||
                            errors.Password?.type === "maxLength" && <span className="text-red-500">Password is maximum 20 character</span> ||
                            errors.Password?.type === 'pattern' && <span className="text-red-500">Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, 1 special character</span>
                        }
                        <div onClick={() => setShowPassword(!showPassword)} className="absolute right-6 top-10">
                            {
                                showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                            }
                        </div>

                    </div>
                    <div className="relative">
                        <label className="block mb-2 font-bold text-gray-900 dark:text-white">Confirm Password</label>
                        <input type={showPassword ? "text" : "password"} {...register("cPassword", {
                            required: true,
                            validate: value => value === password
                        })}
                            placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        {errors.cPassword?.type === "required" && <span className="text-red-500">Confirm Password is required</span>}
                        {errors.cPassword?.type === "validate" && <span className="text-red-500">Passwords do not match</span>}
                        <div onClick={() => setShowPassword(!showPassword)} className="absolute right-6 top-10">
                            {
                                showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                            }
                        </div>
                    </div>
                    <div className="">
                        <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot Password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register a new account</button>
                    <div className="font-bold text-gray-500 dark:text-gray-300">
                        Already registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500"><Link to={'/login'}>Log In</Link></a>
                    </div>
                </form>
                <button onClick={handelGoogleSignIn} type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                        <path d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" />
                    </svg>
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Register;