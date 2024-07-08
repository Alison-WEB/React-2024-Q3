import { Component } from 'react';
import ErrorButton from '../feature/ErrorButton.tsx';
import './ErrorSection.css';

class SearchSection extends Component {
  render() {
    return (
      <div className="error-section">
        <ErrorButton />
      </div>
    );
  }
}

export default SearchSection;