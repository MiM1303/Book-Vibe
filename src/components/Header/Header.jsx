import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/listed-books">Listed Books</NavLink></li>
        <li><NavLink to="/pages-to-read">Pages to Read</NavLink></li>
    </>

    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn bg-transparent lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm text-[#131313CC] font-work text-lg font-normal dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                    </div>
                    <a className="text-3xl text-[#131313] font-work font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn text-white font-work font-semibold text-base bg-[#23BE0A] mr-3">Sign In</a>
                    <a className="btn text-white font-work font-semibold text-base bg-[#59C6D2]">Sign Up</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;