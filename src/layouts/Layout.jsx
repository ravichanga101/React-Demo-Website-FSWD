import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-4 min-h-[80vh]">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
