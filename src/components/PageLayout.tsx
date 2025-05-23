
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const PageLayout = ({ children, className = "" }: PageLayoutProps) => {
  return (
    <div className={`min-h-screen bg-chef-dark ${className}`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
