
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-10 rounded shadow-lg text-center">
                <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
                <p className="text-gray-600 mb-8">Sorry, the page you are looking for does not exist.</p>
                <Link to="/" className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
