import Loader from 'components/Loader/Loader';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieDetails } from 'servises/fetchMovies';
import {
  BackLink,
  MoviePoster,
  MovieInfo,
  MovieExtraInfo,
  ExtraInfoLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();

  const backLinkLocation = location.state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => {
        setMovieDetails(data);
      })
      .catch(() =>
        toast.error('Woops, something went wrong, please try again later')
      );
  }, [movieId]);

  if (!movieDetails) return;

  const { title, poster_path, vote_average, overview, genres } = movieDetails;

  const score = (vote_average * 10).toFixed(0);
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://placehold.co/200x300';

  return (
    <>
      <BackLink to={backLinkLocation}>Back</BackLink>
      {movieDetails && (
        <MovieInfo>
          <MoviePoster src={poster} alt={title} width="200" height="300" />
          <h2>{title}</h2>
          <p>
            <b>User score:</b> <span>{score}%</span>
          </p>
          <p>
            <b>Overview:</b>
          </p>
          <p>{overview ? overview : 'No overview found'}</p>
          <p>
            <b>Genres: </b>
            <span>
              {genres.length > 0
                ? genres.map(({ name }) => name.toLowerCase()).join(', ')
                : 'no genres'}
            </span>
          </p>
        </MovieInfo>
      )}
      <MovieExtraInfo>
        <ExtraInfoLink to="cast" state={{ from: backLinkLocation }}>
          Cast
        </ExtraInfoLink>
        <ExtraInfoLink to="reviews" state={{ from: backLinkLocation }}>
          Reviews
        </ExtraInfoLink>
      </MovieExtraInfo>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
