import { Link } from "react-router-dom";
import { IoWarningOutline } from "react-icons/io5";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center">            
            <div className="card w-5/6 lg:w-1/2 lg:h-60 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-4xl">OPPS!!! <IoWarningOutline  className="text-red-600"/> </h2>
                <p className="text-xl">PAGE DOES NOT EXIST!!!</p>
                <div className="card-actions justify-end">
                <button className="btn bg-[#23BE0A] text-white font-semibold font-work text-lg"><Link to="/">Go back to Home</Link></button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ErrorPage;