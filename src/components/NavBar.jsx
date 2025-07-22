import React from 'react';
import { useSelector } from 'react-redux';
const NavBar = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="navbar bg-base-300 shadow-sm px-4 border-b-2 border-gray-200">
      {/* Left side: Brand */}
      <div className="flex items-center">
        <a className="btn btn-ghost normal-case text-xl">DevTinder</a>
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
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
