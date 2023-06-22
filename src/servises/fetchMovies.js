const BASE_URL = 'https://api.themoviedb.org/3/';

const searchParams = new URLSearchParams({
  method: 'GET',
  api_key: '699a8a8a6315fbf58e6f205efaa3a1e3',
  language: 'en-US',
  include_adult: false,
  headers: {
    accept: 'application/json',
  },
});

export const getTrendingMovies = () => {
  const path = 'trending/movie/day';
  return fetch(`${BASE_URL}${path}?${searchParams}`).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
};

export const getMoviesByName = query => {
  const path = 'search/movie';
  return fetch(`${BASE_URL}${path}?${searchParams}&query=${query}`).then(
    res => {
      if (res.ok) {
        return res.json();
      }
    }
  );
};

export const getMovieDetails = id => {
  const path = `movie/${id}`;
  return fetch(`${BASE_URL}${path}?${searchParams}`).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
};

export const getMovieDetailsCast = id => {
  const path = `movie/${id}/credits`;
  return fetch(`${BASE_URL}${path}?${searchParams}`).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
};

export const getMovieDetailsReviews = id => {
  const path = `movie/${id}/reviews`;
  return fetch(`${BASE_URL}${path}?${searchParams}`).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
};
