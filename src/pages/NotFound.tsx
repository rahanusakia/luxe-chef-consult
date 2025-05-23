
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center py-28">
        <h1 className="text-8xl font-bold text-gold-light mb-4">404</h1>
        <p className="text-2xl text-white/90 mb-8">Oops! Page not found</p>
        <p className="text-white/70 max-w-lg text-center mb-8">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Button asChild className="bg-gold-DEFAULT hover:bg-gold-dark text-chef-dark">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </PageLayout>
  );
};

export default NotFound;
