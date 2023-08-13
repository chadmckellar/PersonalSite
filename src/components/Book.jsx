import React from 'react';
import PropTypes from 'prop-types';
import '../tailwind.css';

function Book({ title, cover, link }) {
  return (
    <div className="w-64">
      <div className="p-2 border rounded shadow bg-slate-950">
        <div className="w-62 h-80 bg-black flex items-center justify-center  rounded-sm border">
          <img src={cover} alt={title} className="max-w-full max-h-full object-contain" />
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h3 className="mt-2 text-sm text-center cursor-pointer rounded-md bg-gray-800 px-4 py-3 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">{title}</h3>
        </a>
      </div>
    </div>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Book;
