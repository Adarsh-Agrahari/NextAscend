import React, { useState } from "react";

const Card = ({ item }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="border border-gray-300 bg-blue-100 p-4 mb-4 rounded-lg shadow transition-transform duration-200 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-200 ease-in-out hover:opacity-30"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-center">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 text-blue-600 font-bold hover:text-gray-900 hover:underline"
          >
            {item.name}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={bookmarked ? "blue" : "none"}
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className={`w-6 h-6 cursor-pointer transition-colors duration-200 ${
                bookmarked
                  ? "text-blue-500"
                  : "text-gray-400 hover:text-gray-600"
              }`}
              onClick={toggleBookmark}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </div>
        </div>
        <div className="text-gray-600 hover:text-gray-800">{item.org}</div>
        <div className="mt-4">
          <div className="mb-4">{item.description}</div>
          <div className="flex flex-wrap">
            <span className="m-1 px-3 py-1 rounded-full bg-gradient-to-r from-green-100 to-green-200 text-gray-500 text-sm font-medium shadow hover:from-green-200 hover:to-green-300 transition-all duration-200 ease-in-out">
              {item.type}
            </span>
            {item.tags &&
              item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="m-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-100 to-yellow-200 text-gray-500 text-sm font-medium shadow hover:from-yellow-200 hover:to-yellow-300 transition-all duration-200 ease-in-out"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="material-icons mr-2">event</span>
            {item.deadline}
          </div>
          {item.stipend && (
            <div className="flex items-center">
              <span className="material-icons mr-2">payments</span>
              {item.stipend}
            </div>
          )}
          {item.location && (
            <div className="flex items-center">
              <span className="material-icons mr-2">place</span>
              {item.location}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
