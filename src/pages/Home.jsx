import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'servises/fetchMovies';
import { toast } from 'react-toastify';
import MovieList from 'components/MovieList/MovieList';
import { Heading } from 'components/MovieList/MovieList.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(data => setMovies(data.results))
      .catch(() =>
        toast.error('Woops, something went wrong, please try again later')
      );
  }, []);

  return (
    <>
      <Heading>Top today</Heading>
      <MovieList movies={movies} />
    </>
  );
};

export default Home;
