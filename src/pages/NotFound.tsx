import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
        <div className="space-y-6 max-w-md">
          <h1 className="text-9xl font-extrabold text-blue-500">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Page not found</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <div className="pt-6">
            <Link to="/">
              <Button className="bg-blue-600 hover:bg-blue-700 inline-flex items-center">
                <Home className="mr-2 h-4 w-4" /> Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
