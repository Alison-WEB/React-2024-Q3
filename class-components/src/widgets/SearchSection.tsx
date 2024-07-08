import { Component } from 'react';
import SearchInput from '../feature/SearchInput.tsx';
import SearchButton from '../feature/SearchButton.tsx';
import './SearchSection.css';

class SearchSection extends Component {
  render() {
    return (
      <div className="search-section">
        <p>Dear reviewer! I'm sorry. Please, check back later.</p>
        <SearchInput />
        <SearchButton />
      </div>
    );
  }
}

export default SearchSection;
