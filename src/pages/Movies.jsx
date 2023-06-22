import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMoviesByName } from 'servises/fetchMovies';
import Searchbar from 'components/Searchbar/Searchbar';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchValue = searchParams.get('query');
    if (!searchValue) return;

    getMoviesByName(searchValue)
      .then(data => setMovies(data.results))
      .catch(() =>
        toast.error('Woops, something went wrong, please try again later')
      );
  }, [searchParams]);

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <MovieList movies={movies} />
    </>
  );
};

export default Movies;
