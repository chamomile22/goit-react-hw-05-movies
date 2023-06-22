import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const Heading = styled.h2`
  margin-top: 10px;
  text-transform: uppercase;
  text-align: center;
  font-size: 20px;
`;

export const MovieItemsList = styled.ul`
  padding-right: 30px;
  padding-left: 30px;
  padding-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
`;

export const MovieItem = styled.li`
  display: flex;
  justify-content: center;
`;

export const MovieTitle = styled.p`
  max-width: 150px;
`;

export const MoviePoster = styled.img`
  border-radius: 8px;
`;

export const MovieLink = styled(NavLink)`
  color: #000000;
  font-weight: 700;
  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: #c02828;
  }

  &:hover + MoviePoster,
  &:focus + MoviePoster {
    box-shadow: 0 0 10px black;
  }
`;
