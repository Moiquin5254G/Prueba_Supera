import React from "react";

export const NavBar = () => {
  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2">
            {/* You can add an icon here */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Add the SVG path here for the icon */}
            </svg>
            <h1 className="text-white text-xl font-bold">To Do</h1>
          </div>
        </div>
      </nav>
    </div>
  );
};