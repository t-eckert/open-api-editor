import { useState } from "react";

const UserToken = () => {
  let [showMenu, setShowMenu] = useState(false);

  const menuToggleClasses = (showMenu: boolean) =>
    showMenu
      ? "border-l bg-gray-100 pl-1 pr-2 py-1 rounded-r-xl cursor-pointer hover:bg-gray-100"
      : "border-l bg-white pl-1 pr-2 py-1 rounded-r-xl cursor-pointer hover:bg-gray-100";

  return (
    <div className="relative inline-block z-10">
      <div className="mb-2 flex flex-row items-center shadow rounded-xl">
        <div className="bg-white rounded-l-xl flex flex-row items-center">
          <img
            className="w-7 h-7 bg-gray-300 rounded-l-xl flex-shrink-0"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
            alt=""
          />
          <div className="font-medium text-sm px-2">Jane Cooper</div>
        </div>
        <div
          onClick={() => setShowMenu(!showMenu)}
          className={menuToggleClasses(showMenu)}
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      {showMenu ? (
        <div className="z-50 origin-top-right absolute right-0 rounded-xl shadow bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="none">
            <button
              className="flex flex-row items-center gap-3 w-full text-left px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <svg
                className="h-4 w-4 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              Feedback
            </button>
            <button
              className="flex flex-row items-center gap-3 w-full text-left px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <svg
                className="h-4 w-4 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Settings</span>
            </button>
            <button
              className="border-t border-gray-100 flex flex-row items-center gap-3 w-full text-left px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <svg
                className="h-4 w-4 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Sign out</span>
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default UserToken;
