import React from "react"
import HeroSection from "./Hero";
import GenreMovieList from "./GenreMovieList";

const Movie: React.FC = () => {
  return (
    <div>
      <HeroSection/>
      <GenreMovieList/>
    </div>
  )
};

export default Movie;
