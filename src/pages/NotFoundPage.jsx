import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-4xl font-bold mb-4 text-red-600">404 - Page Not Found</h1>
    <p className="mb-4 text-gray-700">The page you’re looking for doesn’t exist.</p>
    <Link to="/" className="text-blue-600 hover:underline">Go back to Dashboard</Link>
  </div>
);

export default NotFoundPage;
