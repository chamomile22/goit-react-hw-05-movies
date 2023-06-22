import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { SearchBtn, SearchForm, SearchInput } from './Searchbar.styled';
import { ReactComponent as SearchIcon } from 'icons/search-icon.svg';

const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) {
      return toast.error('Please, enter any movie name');
    }
    onSubmit(value);
    setValue('');
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        name="query"
        value={value}
        onChange={handleChange}
      />
      <SearchBtn type="submit">
        <SearchIcon width="20" />
      </SearchBtn>
    </SearchForm>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
