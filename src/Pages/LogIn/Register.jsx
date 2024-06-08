import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const password = watch("Password");

    const [showPassword, setShowPassword] = useState(false);
const {createUser} = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        createUser(data.Email, data.Name)
        .then( result =>{
            const loggedUser=result.user;
            console.log('loggedUser', loggedUser);
        })
        reset();
    };

    console.log(watch("example"));
    return (
        <div className="flex items-center justify-center min-h-screen bg-[url('https://i.ibb.co/0y2RJ5w/Computer-login-amico.png')] bg-cover" >
            <div className="p-4 w-2/3 md:w-1/2 bg-white bg-opacity-90 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <h5 className="text-xl font-medium text-center text-gray-900 dark:text-white">Sign Up in to our platform</h5>
                    <div>
                        <label className="block mb-2 font-bold text-gray-900 dark:text-white">Your Name</label>
                        <input type="text" {...register("Name", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your Name" />
                        {errors.Name && <span className="text-red-500">Name is required</span>}
                    </div>
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
            </div>
        </div>
    );
};

export default Register;