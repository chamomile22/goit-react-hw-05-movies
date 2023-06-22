import styled from '@emotion/styled';

export const SearchForm = styled.form`
  width: 240px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
  border: 1px solid #717171;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  width: 200px;
  height: 30px;
  font-size: 17px;
  padding-left: 5px;
  padding-right: 5px;
  border: none;
  background-color: white;
  overflow: hidden;
  outline: none;
`;

export const SearchBtn = styled.button`
  display: inline-block;
  width: 34px;
  height: 34px;
  border: 0;
  background-color: #e74141;
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  color: white;

  &:hover,
  &:focus {
    background-color: #b40909;
  }
`;
