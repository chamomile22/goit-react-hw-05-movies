import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding-top: 10px;
  background-color: #750d0d;
`;

export const Heading = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 20px;
  color: white;
`;

export const MovieReviewsList = styled.ul`
  list-style: none;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 15px;
  align-items: start;
`;

export const MovieReviewsItem = styled.li`
  padding: 20px 25px;
  background-color: white;
  border-radius: 10px;
`;

export const ActorName = styled.p`
  font-size: 19px;
  font-weight: 700;
  color: #818181;
  position: relative;

  &::before {
    position: absolute;
    left: 0;
    top: 26px;
    content: '';
    width: 400px;
    height: 1.5px;
    background-color: #ca2c2c;
  }
`;

export const Content = styled.p`
  margin-top: 13px;
  color: #000000;
  font-size: 15px;
  font-weight: 500;
`;
