import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        <li><NavLink to='/' className="font-bold">Home</NavLink></li>
                        <li><NavLink to='/listed-books' className="font-bold">Listed Books</NavLink></li>
                        <li><NavLink to='/page-read' className="font-bold">Pages to Read</NavLink></li>
                        <li><NavLink to='/upcoming' className="font-bold">Upcoming Book</NavLink></li>
                        <li><NavLink to='/contact' className="font-bold">Contact Us</NavLink></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-3xl font-bold">Book-Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/' className="font-bold">Home</NavLink></li>
                    <li><NavLink to='/listed-books' className="font-bold">Listed Books</NavLink></li>
                    <li><NavLink to='/page-read' className="font-bold">Pages to Read</NavLink></li>
                    <li><NavLink to='/upcoming' className="font-bold">Upcoming Book</NavLink></li>
                    <li><NavLink to='/contact' className="font-bold">Contact Us</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <a className="btn bg-[#23BE0A] text-white font-bold hover:text-black duration-500">Sign In</a>
                <a className="btn bg-[#59C6D2] text-black font-bold">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;