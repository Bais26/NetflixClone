import GenresList from '../../Constant/Genrelist';
import MovieList from '../MovieList';

interface Genre {
  id: number;
  name: string;
}

function GenreMovieList(): JSX.Element {
  return (
    <div>
      {GenresList.genere.map((item: Genre, index: number) => index <= 4 && (
        <div className='p-6 px-8 md:px-16' key={item.id}>
          <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
          <MovieList genreId={item.id} index_={index} />
        </div>
      ))}
    </div>
  );
}

export default GenreMovieList;

