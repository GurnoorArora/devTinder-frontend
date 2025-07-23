import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/constants.js';
import { removeUser } from '../utils/userSlice.js';
const NavBar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    // Logic for logging out the user
    try {
      // Assuming you have an API endpoint for logout
      await axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true });
      //redirect to login or home page after logout
      dispatch(removeUser)
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout failed:', error);
    }
    console.log('User logged out');
  };
  return (
    <div className="navbar bg-base-300 shadow-sm px-4 border-b-2 border-gray-200">
      {/* Left side: Brand */}
      <div className="flex items-center">
        <Link to="/" className="btn btn-ghost normal-case text-xl">DevTinder</Link>
      </div>

      {/* Right side: Avatar */}
      <div className="ml-auto dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
         { user && <div className="w-10 rounded-full">
            <img
              alt="User avatar"
              src={user.photoUrl || 'https://via.placeholder.com/150'}
            />
          </div>}
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link to="/profile" className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li><a>Settings</a></li>
          <li><a onClick={handleLogout}>Logout</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
