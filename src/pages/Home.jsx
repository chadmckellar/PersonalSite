import React from 'react';
import '../tailwind.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function TimeLine() {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 rounded-lg">
      <div className="container pl-14 pr-6 py-12 mx-auto mb-12">
        <div className="grid gap-4 mx-4">
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="relative px-4 sm:col-span-1 sm:space-y-1 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-[3px] sm:before:-left-[13px] before:dark:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400 pb-6">
                <h3 className="text-xl font-semibold">Michetti Information Solutions, Inc.</h3>
                <time className="text-xs uppercase dark:text-gray-400">Sep 2021 - Present</time>
                <p className="mt-3">As a Software Developer, I actively contributed to innovative projects and the development of scalable solutions. Working with a collaborative team, I helped enhance key products by optimizing user experiences. My efforts played a part in the ongoing success of the organization, reflecting a focus on quality and effectiveness in software engineering.</p>
              </div>

              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400 pb-6">
                <h3 className="text-xl font-semibold">University Of Saskatchewan</h3>
                <time className="text-xs uppercase dark:text-gray-400">2016 - 2021</time>
                <p className="mt-3">Completing a BSc in Computer Science, I found that the academic pursuit became more than just a degree. It was a journey that ignited a deep passion for technology, engaging with challenging projects and novel concepts. This unique learning environment cultivated essential programming skills and a commitment to creativity and lifelong learning.</p>
              </div>

              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <h3 className="text-xl font-semibold">ADM Agri-Industries</h3>
                <time className="text-xs uppercase dark:text-gray-400">Aug 2015 - Aug 2016</time>
                <p className="mt-3">My role as a Shipping Operator provided a solid foundation in understanding the importance of discipline, hard work, and resilience. Working in this demanding environment helped me develop essential skills and a strong work ethic, principles that have influenced my approach to software engineering and professional development.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <h1 className="text-2xl md:text-4xl font-semibold text-center text-gray-200 my-8">Hi, I'm Chad...</h1>
      <main className="flex flex-col justify-center">
        <div className="mx-auto max-w-screen-md">
          {TimeLine()}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
