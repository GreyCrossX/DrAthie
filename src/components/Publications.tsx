import  { useState } from 'react';
import { papers } from './data';
import Logo from './Logo.astro';

const Card = ({ invdata }) => (
  <div className="max-w-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between h-full">
    <a href={invdata.URL}>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{invdata.title}</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 max-h-48 overflow-auto">{invdata.abstract}</p>
    <a
      href={invdata.URL}
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Ir al artículo
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>
);

const Publications = () => {
  const initialLoadCount = 3;
  const [visibleCount, setVisibleCount] = useState(initialLoadCount);
  const [showMore, setShowMore] = useState(true);


  const handleShowMore = () => {
    if (showMore) {
      setVisibleCount((prevCount) => prevCount + initialLoadCount);
      console.log("data loaded")
      if (visibleCount + initialLoadCount >= papers.length) {
        setShowMore(false);
        console.log("Si jala")
      }
    } else {
      setVisibleCount(initialLoadCount);
      setShowMore(true);
    }
  };

  return (
    <section
      id="Investigacion"
      className="top-0 z-[-2] h-auto w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] text-[#151a36] mx-auto"
    >
      <span id="papers">
      <div className="w-16 mb-10 text-center m-auto pt-10">
      <svg 
  viewBox="0 0 160 200"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M0 200L75 142L32 138L75 0L0 200Z" fill="currentColor" />
  <path d="M160 200L85 142L128 138L85 0L160 200Z" fill="currentColor" />

</svg>
      </div>
        <div className="w-16 mb-4 text-center m-auto pt-10" />
        <h1 className="text-xl py-8 font-semibold px-4">
          Estos son algunas de las publicaciones realizadas por el Dr. Athie:
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pl-4">
          {papers.slice(0, visibleCount).map((invdata) => (
            <Card key={invdata.id} invdata={invdata} />
          ))}
        </div>
        <div className="py-4 flex justify-center">
          <button
            onClick={handleShowMore}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {showMore ? 'Show more' : 'Show less'}
          </button>
        </div>
      </span>
    </section>
  );
};

export default Publications;
