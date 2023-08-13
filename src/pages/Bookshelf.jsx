/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../tailwind.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Book from '../components/Book';
import coverDefianceOfTheFall from '../assets/CoverDefianceOfTheFall.jpg';
import coverMeditations from '../assets/CoverMeditations.jpg';

function Bookshelf() {
  const books = [
    {
      title: 'Defiance of the Fall',
      cover: coverDefianceOfTheFall,
      link: 'https://www.amazon.ca/Defiance-of-the-Fall-6-book-series/dp/B0916H6FBX',
      category: 'reading',
    },
    {
      title: 'Meditations',
      cover: coverMeditations,
      link: 'https://www.amazon.ca/Meditations-Marcus-Aurelius/dp/048629823X',
      category: 'reading',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <h1 className="text-2xl md:text-4xl font-semibold text-center text-gray-200 my-8">Currently reading...</h1>
        <div className="flex justify-left flex-wrap p-1">
          {books.filter((book) => book.category === 'reading').map((book) => (
            <div className="m-4">
              <Book {...book} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Bookshelf;
