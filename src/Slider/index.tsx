import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../service/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

interface Movie {
  backdrop_path: string;
}

const Slider: React.FC = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    try {
      const resp = await GlobalApi.getTrendingVideos();
      setMovieList(resp.data.results);
    } catch (error) {
      console.error('Failed to fetch trending movies:', error);
    }
  };

  const sliderRight = (element: HTMLDivElement | null) => {
    if (element) element.scrollLeft += screenWidth - 110;
  };

  const sliderLeft = (element: HTMLDivElement | null) => {
    if (element) element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div className='relative'>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-14 mt-[210px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className='hidden md:block text-white text-[30px] absolute mx-14 mt-[210px] cursor-pointer right-0'
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        ref={elementRef}
        className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth'
      >
        {movieList.map((item, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt={`Backdrop ${index}`}
            className='min-w-full md:h-[390px] object-cover object-center mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in'
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
