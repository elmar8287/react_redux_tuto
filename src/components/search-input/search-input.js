import React from 'react';
import './search-input.css';

const SearchPanel = () => {
  const searchText = 'Type here for search';

  return <input 
  className = "search-input"
  placeholder = { searchText } />
};

export default SearchPanel;
