import React from 'react';
import './SearchBar.css';

const SearchBar = () => (
  <form className='search-bar'>
    <i className='fa fa-search' aria-hidden='true'></i>
    <input type='search' placeholder='Search Games...' />
    <button type='button'>Search</button>
  </form>
);

export default SearchBar;
