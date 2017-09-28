import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

const propTypes = {
  query: PropTypes.string.isRequired,
  updateQuery: PropTypes.func.isRequired,
  clearQuery: PropTypes.func.isRequired
};

const SearchBar = ({ query, updateQuery, clearQuery }) => {
  const handleSubmit = (event) => (
    event.preventDefault()
  );

  const handleChange = (event) => (
    updateQuery(event.target.value)
  );

  return (
    <form
      className='search-bar'
      onSubmit={handleSubmit}
    >
      <i className='fa fa-search' aria-hidden='true'></i>
      <input
        type='search'
        placeholder='Search Games...'
        value={query}
        onChange={handleChange}
      />
      <button
        type='button'
        onKeyDown={clearQuery}
        onMouseDown={clearQuery}
      >
        Clear
      </button>
    </form>
  );
};

SearchBar.propTypes = propTypes;

export default SearchBar;
