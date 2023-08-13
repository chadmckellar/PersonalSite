import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="py-8 text-center bg-gray-800 mt-auto">
      <div>
        Get in touch:
        <Link href="mailto:chad@example.com" className="text-blue-400"> mckellar.chad@gmail.com</Link>
      </div>
    </div>
  );
}
