import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="section">
      <div className="container text-center">
        <h1 className="text-5xl font-bold mb-8">404</h1>
        <p className="text-2xl mb-8">Page Not Found!</p>
        <Link className="btn" to="/">
          <FaHome className="mr-2" />
          Back To Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
