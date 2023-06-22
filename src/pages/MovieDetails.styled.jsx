import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 25px;
`;

export const BackLink = styled(NavLink)`
  display: inline-block;
  width: 65px;
  margin-top: 20px;
  margin-left: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 4px;
  text-align: center;
  background-color: #ca2c2c;
  color: #ffffffac;
  transition: color 250ms ease-in-out;
  transition-property: color, background-color;

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #b40909;
  }
`;

export const MovieInfo = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 15px;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 230px 1fr;
`;

export const MoviePoster = styled.img`
  border-radius: 10px;
  grid-row-start: 1;
  grid-row-end: 6;
`;

export const MovieExtraInfo = styled.div`
  height: 40px;
  background-color: #ca2c2c;
  display: flex;
  align-items: stretch;
  padding-left: 30px;
`;

export const ExtraInfoLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #ca2c2c;
  color: #ffffffac;
  transition: color 250ms ease-in-out;
  transition-property: color, background-color;

  &:hover {
    color: #ffffff;
    background-color: #b40909;
  }
`;
