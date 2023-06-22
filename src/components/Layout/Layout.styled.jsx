import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 50px;
  background-color: #ca2c2c;
`;

export const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 25px;
`;

export const HeaderLink = styled(NavLink)`
  color: #ffffffb0;
  transition: color 250ms ease-in-out;

  &:hover,
  &:focus {
    color: white;
  }
`;

export const Main = styled.main`
  /* padding-left: 30px;
  padding-right: 30px; */
`;
