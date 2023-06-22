import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieDetailsReviews } from 'servises/fetchMovies';
import {
  ActorName,
  Content,
  Heading,
  MovieReviewsItem,
  MovieReviewsList,
  Wrapper,
} from './ReviewsList.styled';
import { NoInfo } from 'components/no-info/NoInfoText.styled';

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieDetailsReviews(movieId)
      .then(data => setReviews(data.results))
      .catch(() =>
        toast.error('Woops, something went wrong, please try again later')
      );
  }, [movieId]);

  return (
    <Wrapper>
      <Heading>Reviews</Heading>
      {reviews.length > 0 ? (
        <MovieReviewsList>
          {reviews.map(({ id, author, content }) => {
            return (
              <MovieReviewsItem key={id}>
                <ActorName>Author: {author}</ActorName>
                <Content>{content}</Content>
              </MovieReviewsItem>
            );
          })}
        </MovieReviewsList>
      ) : (
        <NoInfo>No reviews found</NoInfo>
      )}
    </Wrapper>
  );
};

export default ReviewsList;
