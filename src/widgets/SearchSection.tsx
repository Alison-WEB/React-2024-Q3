import { Component, KeyboardEvent, ChangeEvent, FormEvent } from 'react';
import SearchButton from '../feature/SearchButton.tsx';
import './SearchSection.css';

interface Props {
  searchQuery: string;
  fetchApiData: (query?: string) => void;
}

class SearchSection extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  state = {
    searchQuery: this.props.searchQuery || '',
  };

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.state.searchQuery) {
      localStorage.setItem('searchQuery', this.state.searchQuery.trim());
    }
    this.props.fetchApiData(this.state.searchQuery);
  };

  render() {
    return (
      <section className="search-section">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={this.state.searchQuery ?? ''}
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyPress}
            onKeyUp={this.handleKeyPress}
            maxLength={20}
          />
          <SearchButton />
        </form>
      </section>
    );
  }
}

export default SearchSection;
