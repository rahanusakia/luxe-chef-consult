
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";

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
      <FloatingWhatsApp />
    </div>
  );
};

export default PageLayout;
