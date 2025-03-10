import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-around">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/lessons">Lessons</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
