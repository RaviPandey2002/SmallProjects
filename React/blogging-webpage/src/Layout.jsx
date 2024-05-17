import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {

  return (
    <main className="Layout">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
