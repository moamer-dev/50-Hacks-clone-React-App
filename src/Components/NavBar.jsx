import React from 'react'
import { useNavigate } from 'react-router-dom';


function NavBar() {
    const navigation = useNavigate();

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                    </ul>
                </div>
                <a onClick={() => navigation('/')} className="btn btn-ghost text-xl">50 Hacks</a>
            </div>
            <div className="navbar-end">
                <a onClick={() => navigation('/new')} className="btn btn-warning">+ Add Hack</a>
            </div>
        </div>
    )
}

export default NavBar
