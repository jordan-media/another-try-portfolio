// src/layouts/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from '../components/Header';
import Footer from "../components/Footer";
import NavigationGrid from "../sections/NavigationGrid";

// ← Clerk imports
import { SignedIn, SignedOut, SignIn, SignUp, UserButton } from '@clerk/clerk-react';

const Layout = () => {
  return (
    <div className="layout-root">
      <div className="global-content-wrapper">
        <header className="flex justify-between items-center p-4">
          {/* your existing header content */}
          <Header />

          {/* new Clerk auth controls */}
          <div className="flex gap-4">
            <SignedOut>
              <SignIn>
                <button>Sign In</button>
              </SignIn>
              <SignUp>
                <button>Sign Up</button>
              </SignUp>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>

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
