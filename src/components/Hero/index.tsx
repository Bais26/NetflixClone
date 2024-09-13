import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';

interface MovieData {
  title: string;
  overview: string;
  backdrop_path: string;
}

const HeroSection: React.FC = () => {
  const [movieData, setMovieData] = useState<MovieData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    // Fetch movie/series data dari TMDB
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
      .then(response => {
        const randomMovie = response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ];
        setMovieData({
          title: randomMovie.title,
          overview: randomMovie.overview,
          backdrop_path: randomMovie.backdrop_path
        });
      })
      .catch(error => {
        setError("Failed to fetch data. Please check API Key or endpoint.");
        console.error("Error fetching movie data", error);
      });
  }, []);

  if (error) {
    return <div>{error}</div>; // Error handling
  }

  if (!movieData) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className="relative w-full h-screen bg-gray-900 -z-20
    ">
      <Navbar/>
      <img 
        src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`} 
        alt={movieData.title} 
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col items-start justify-center h-full bg-gradient-to-t from-black to-transparent p-8">
        <h1 className="text-6xl font- text-white">{movieData.title}</h1>
        <p className="mt-4 text-lg text-gray-300 w-full md:w-1/3">{movieData.overview}</p>
        <div className='flex gap-6'>
          <div className='mt-4 px-4 py-2 bg-red-600 text-white rounded flex gap-2 items-center'>
          <i className="fa-solid fa-play"></i>
        <button className="">Play</button>
          </div>
        <button className="mt-4 px-4 py-2 bg-gray-700 text-white rounded">More Info</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
