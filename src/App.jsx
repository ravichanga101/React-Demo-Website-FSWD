import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Lessons from "./pages/Lessons";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
