import { Component, KeyboardEvent, ChangeEvent, FormEvent } from 'react';
import SearchButton from '../feature/SearchButton.tsx';
import ErrorButton from '../feature/ErrorButton.tsx';
import getApiData from '../shared/getApiData';
import ApiData from '../shared/types.ts';
import './SearchSection.css';

interface Props {
  searchQuery: string;
  apiData: ApiData[] | null;
}

class SearchSection extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  state = {
    searchQuery: this.props.searchQuery || '',
    apiData: null,
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
    this.fetchApiData(this.state.searchQuery);
    console.log(this.state.searchQuery);
  };

  fetchApiData = async (query?: string) => {
    const data = await getApiData(query);
    this.setState({ apiData: data });
  };

  render() {
    return (
      <div className="search-section">
        <h1>Database of Astronomical Objects</h1>
        <p>Dear reviewer! I'm sorry. Please, check back later.</p>
        <p>
          At the moment the search works if you click "Search" and then reload
          the page 😢
        </p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={this.state.searchQuery ?? ''}
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyPress}
            onKeyUp={this.handleKeyPress}
          />
          <SearchButton />
        </form>
        <ErrorButton />
      </div>
    );
  }
}

export default SearchSection;
