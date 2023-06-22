import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieDetailsCast } from 'servises/fetchMovies';
import {
  ActorName,
  Avatar,
  Character,
  Heading,
  MovieCastItem,
  MovieCastList,
  Wrapper,
} from './CastList.styled';
import { NoInfo } from 'components/no-info/NoInfoText.styled';

const CastList = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieDetailsCast(movieId)
      .then(data => setCast(data.cast))
      .catch(() =>
        toast.error('Woops, something went wrong, please try again later')
      );
  }, [movieId]);

  let poster;

  return (
    <Wrapper>
      <Heading>Cast</Heading>
      {cast.length > 0 ? (
        <MovieCastList>
          {cast.map(({ id, name, character, profile_path }) => {
            poster = profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : 'https://placehold.co/150x220';
            return (
              <MovieCastItem key={id}>
                <Avatar
                  src={poster}
                  alt={`${name}, ${character}`}
                  width="150"
                />
                <ActorName>{name}</ActorName>
                <Character>{character}</Character>
              </MovieCastItem>
            );
          })}
        </MovieCastList>
      ) : (
        <NoInfo>No information about cast found</NoInfo>
      )}
    </Wrapper>
  );
};

export default CastList;
