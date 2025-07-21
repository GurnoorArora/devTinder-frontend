import React from 'react';

const NavBar = () => {
  return (
    <div className="navbar bg-base-300 shadow-sm px-4 border-b-2 border-gray-200">
      {/* Left side: Brand */}
      <div className="flex items-center">
        <a className="btn btn-ghost normal-case text-xl">DevTinder</a>
      </div>

      {/* Right side: Avatar */}
      <div className="ml-auto dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="User avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
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
