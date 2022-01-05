import React from "react";

function Navbar() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-purple-500 px-4">
      <div className="flex items-center justify-between py-2">
        <div>
          <p className="text-white font-mono">Todo App</p>
        </div>
        <div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
