import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Section,
  MovieItemsList,
  MovieItem,
  MovieLink,
  MovieTitle,
  MoviePoster,
} from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  let poster;
  return (
    <Section>
      <MovieItemsList>
        {movies.map(({ id, title, poster_path }) => {
          poster = poster_path
            ? `https://image.tmdb.org/t/p/w200${poster_path}`
            : 'https://placehold.co/200x300';
          return (
            <MovieItem key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                <MoviePoster src={poster} alt={title} width="150" />
                <MovieTitle>{title}</MovieTitle>
              </MovieLink>
            </MovieItem>
          );
        })}
      </MovieItemsList>
    </Section>
  );
};

MovieList.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};

export default MovieList;
