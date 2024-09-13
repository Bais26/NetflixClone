import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../../service/GlobalApi';
import MovieCard from '../MovieCard';
import HrMovieCard from '../HrMovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

interface Movie {
    id: number;
    title: string;
    backdrop_path: string;
    poster_path: string;
}

interface MovieListProps {
    genreId: number;
    index_: number;
}

const MovieList: React.FC<MovieListProps> = ({ genreId, index_ }) => {
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        getMovieByGenreId();
    }, []);

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(resp => {
            setMovieList(resp.data.results);
        });
    };

    const slideRight = (element: HTMLDivElement | null) => {
        if (element) {
            element.scrollLeft += 500;
        }
    };

    const slideLeft = (element: HTMLDivElement | null) => {
        if (element) {
            element.scrollLeft -= 500;
        }
    };

    return (
        <div className='relative'>
            <IoChevronBackOutline onClick={() => slideLeft(elementRef.current)} 
                className={`text-[50px] text-white
                p-2 z-10 cursor-pointer 
                hidden md:block absolute
                ${index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'}`} />
   
            <div ref={elementRef} className='flex overflow-x-auto gap-8
                scrollbar-hide scroll-smooth scrollbar-hide pt-4 px-3 pb-4'>
                {movieList.map((item, index) => (
                    <React.Fragment key={index}>
                        {index_ % 3 === 0 ? <HrMovieCard movie={item} /> : <MovieCard movie={item} />}
                    </React.Fragment>
                ))}
            </div>
            <IoChevronForwardOutline onClick={() => slideRight(elementRef.current)}
                className={`text-[50px] text-white hidden md:block
                p-2 cursor-pointer z-10 top-0
                absolute right-0 
                ${index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'}`} /> 
        </div>
    );
};

export default MovieList;

