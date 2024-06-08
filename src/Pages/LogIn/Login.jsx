import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {logIn}=useContext(AuthContext)

    const handelLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        form.reset()
    }
    return (

        <div className="flex items-center justify-center min-h-screen bg-[url('https://www.wedgatematrimony.com/wp-content/uploads/2020/02/matrimonial-site.jpg')] bg-cover" >
            <div className="p-4 w-2/3 md:w-1/2 bg-white bg-opacity-90 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handelLogin} className="space-y-6" action="#">
                    <h5 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Sign in to our platform</h5>
                    <div>
                        <label name="email" className="block mb-2 font-bold text-gray-900 dark:text-white">Your Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div className="relative">
                        <label name="password" className="block mb-2 font-bold text-gray-900 dark:text-white">Your Password</label>
                        <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
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
                        Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500"><Link to={'/register'}>Create account</Link></a>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;