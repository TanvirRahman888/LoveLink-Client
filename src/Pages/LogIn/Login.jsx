import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { logIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const { googleSignIn } = useContext(AuthContext)
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

    const handelLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Login Successful');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                toast.error(error.message)
            });
        form.reset()
    }

    return (

        <div className="flex items-center justify-center min-h-screen bg-[url('https://www.wedgatematrimony.com/wp-content/uploads/2020/02/matrimonial-site.jpg')] bg-cover" >
            <Helmet>
                <title>LoveLink | Log In</title>
            </Helmet>
            <div className="p-4 w-2/3 md:w-1/2 bg-white bg-opacity-90 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handelLogin} className="space-y-6">
                    <h5 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Sign in to our platform</h5>
                    <div>
                        <label name="email" className="block mb-2 font-bold text-gray-900 dark:text-white">Your Email</label>
                        <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div className="relative">
                        <label name="password" className="block mb-2 font-bold text-gray-900 dark:text-white">Your Password</label>
                        <input type={showPassword ? "text" : "password"} name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        <div onClick={() => setShowPassword(!showPassword)} className="absolute right-6 top-11">
                            {
                                showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                            }
                        </div>
                    </div>
                    <div className="">
                        <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forget Password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <p className="text-blue-700 hover:underline dark:text-blue-500"><Link to={'/register'}>Create account</Link></p>
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
export default Login;