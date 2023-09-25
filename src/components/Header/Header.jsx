import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="flex gap-5 justify-between items-center">
            <div>
                <Link className="text-2xl font-bold">CareerHub</Link>
            </div>
            <div className="flex gap-5">
                <NavLink to="/statistics">Statistics</NavLink>
                <NavLink to="/applied-job">Applied Job</NavLink>
                <NavLink to="/blog">Blog</NavLink>
            </div>
            <div>
                <button className="border px-3 py-2 bg-[#6499E9] text-white rounded"><Link>Start Applying</Link></button>
            </div>
        </nav>
    );
};

export default Header;
