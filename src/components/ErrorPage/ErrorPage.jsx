import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-6xl text-red-600">OPPS!!! PAGE DOES NOT EXIST!!!</h1>
            <Link to="/">Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;