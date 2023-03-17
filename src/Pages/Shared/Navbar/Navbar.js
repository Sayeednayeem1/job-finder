import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import logo from "../../../assets/Images/logo.png";
import Time from '../../../Time/Time';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    };


    const navItems = <React.Fragment>
        <li className="text-xl font-bold"><Link to='/'>Home</Link></li>
        <li className="text-xl font-bold"><Link to='/about'>About</Link></li>
        <li className="text-xl font-bold"><Link to='/contactUs'>Contact Us</Link></li>
        {
            user?.uid ?
                <li className="text-xl font-bold"><button onClick={handleLogout}>Log Out</button></li>
                :
                <li className="text-xl font-bold"><Link to='/login'>Login</Link></li>
        }
    </React.Fragment>

    return (
        <div className='shadow-xl'>
            <div className='max-w-[1440px] mx-auto'>
                <div className="navbar  py-4">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navItems}
                            </ul>
                        </div>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={logo} alt="logo" />
                            </div>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user?.displayName ?
                                <h1 className='text-xl font-bold'>{user?.displayName}</h1>
                                :
                                <Time className="text-xl font-bold"></Time>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;