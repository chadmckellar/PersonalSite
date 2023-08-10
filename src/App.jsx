import React from 'react';
import './tailwind.css';

function TimeLine() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 rounded-t-lg">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracki">Michetti Information Solutions, Inc. </h3>
                <time className="text-xs tracki uppercase dark:text-gray-400">{currentYear}</time>
                <p className="mt-3">Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracki">University Of Saskatchewan</h3>
                <time className="text-xs tracki uppercase dark:text-gray-400">Jul 2019</time>
                <p className="mt-3">Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.</p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold tracki">Pellentesque habitant morbi</h3>
                <time className="text-xs tracki uppercase dark:text-gray-400">Jan 2016</time>
                <p className="mt-3">Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      <nav className="flex justify-between items-center py-4 px-8">
        <div className="text-2xl font-semibold">Chad McKellar</div>
        <div>
          <a href="#contact" className="px-4">Contact</a>
        </div>
      </nav>
      {/* <header className="text-center py-20">
        <h1 className="text-5xl font-bold">Hi, I'm Chad</h1>
      </header> */}
      <body>
        <div className="mx-auto max-w-screen-md">
          {TimeLine()}
        </div>
      </body>
      <footer id="contact" className="py-8 text-center bg-gray-800 mt-auto">
        <p>
          Get in touch:
          <a href="mailto:chad@example.com" className="text-blue-400"> mckellar.chad@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
