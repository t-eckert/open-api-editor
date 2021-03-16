const UserToken = (user: any /* User */) => {
  return (
    <div className="bg-white shadow rounded-xl flex flex-row items-center">
      <div className="px-4 py-2 flex flex-row gap-2 items-center">
        <img
          className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
          alt=""
        />
        <div className="font-medium text-sm">Jane Cooper</div>
      </div>
      <div className="border-l">
        <svg
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
  );
};

export default UserToken;
