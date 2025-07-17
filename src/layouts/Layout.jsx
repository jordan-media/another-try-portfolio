// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from '../components/Header';
import Footer from "../components/Footer";
import NavigationGrid from "../sections/NavigationGrid";

const Layout = () => {
  return (
    <div className="layout-root">
      <div className="global-content-wrapper">
        <Header />
        <main className="main-content">
          <Outlet />
        </main>
        <NavigationGrid />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
