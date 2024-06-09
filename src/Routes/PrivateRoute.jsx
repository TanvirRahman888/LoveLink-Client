import { useContext } from "react";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return < div className="h-screen w-full flex items-center justify-center -mt-32">
            <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse bg-red-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-red-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-red-400"></div>
            </div>
            </div>
    }
    if (user) {
        return children;
    }
    // Is not working

    return <Navigate to={'/login'}></Navigate>

    // return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default PrivateRoute;