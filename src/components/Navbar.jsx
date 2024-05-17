// components/Navbar.js
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCog, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { logout } from "../store/authSlice";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold">
            Home
          </Link>
          <div className="relative">
            <div onClick={toggleDropdown} className="cursor-pointer">
              <button className="text-xl font-bold focus:outline-none">
                Workspace
              </button>
              <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
            </div>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <Link
                  href="/workspace1"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Workspace 1
                </Link>
                <Link
                  href="/workspace2"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Workspace 2
                </Link>
                {/* Agrega más items según sea necesario */}
              </div>
            )}
          </div>
        </div>
        <div className="flex-grow max-w-lg mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg text-black"
          />
        </div>
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faCog} className="text-xl cursor-pointer" />
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon
                icon={faUser}
                className="text-xl cursor-pointer"
              />
              <button
                onClick={handleLogout}
                className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <button className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-100">
                Sign in
              </button>
              <button className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-100">
                Create account
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
