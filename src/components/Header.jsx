import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header bg-slate-800">
      <nav className="flex justify-between items-center py-4 px-8">
        <div className="text-2xl font-semibold">Chad McKellar</div>
        <div className="flex">
          <div className="px-1">
            <Link to="/home" className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
              Home
            </Link>
          </div>
          <div className="px-1">
            <Link to="/bookshelf" className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
              Bookshelf
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
