import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center p-6 bg-gray-100">
      {/* Hero Section */}
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to React Learning...
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Learn React step by step with modern tools and best practices.
        </p>
        <Link to="/lessons">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Start Learning
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">
            Step-by-Step Lessons
          </h2>
          <p className="text-gray-600 mt-2">
            Learn React concepts in a structured and easy way.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">
            Interactive Examples
          </h2>
          <p className="text-gray-600 mt-2">
            Try out real examples and projects while learning.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Modern Tools</h2>
          <p className="text-gray-600 mt-2">
            Learn how to use React with Vite, Tailwind, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
