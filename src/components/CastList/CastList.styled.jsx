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

export const MovieCastList = styled.ul`
  list-style: none;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 15px;
  grid-row-gap: 27px;
  align-items: start;
`;

export const MovieCastItem = styled.li`
  width: 100%;
  height: 100%;
  padding-top: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
`;

export const Avatar = styled.img`
  border-radius: 8px;
  margin-bottom: 8px;
  box-shadow: 0 0 10px #0000006b;
`;

export const ActorName = styled.p`
  max-width: 150px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;
export const Character = styled.p`
  margin-top: 4px;
  max-width: 150px;
  color: #9b9b9b;
  font-size: 15px;
  font-weight: 700;
  text-align: center;
`;
