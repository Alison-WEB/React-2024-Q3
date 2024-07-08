import { Component } from 'react';
import SearchInput from '../feature/SearchInput.tsx';
import SearchButton from '../feature/SearchButton.tsx';
import ErrorButton from '../feature/ErrorButton.tsx';
import './SearchSection.css';

class SearchSection extends Component {
  render() {
    return (
      <div className="search-section">
        <h1>Database of Astronomical Objects</h1>
        <p>Dear reviewer! I'm sorry. Please, check back later.</p>
        <SearchInput />
        <SearchButton />
        <ErrorButton />
      </div>
    );
  }
}

export default SearchSection;
