import { Component } from 'react';
import SearchSection from '../widgets/SearchSection.tsx';
import ResultSection from '../widgets/ResultSection.tsx';
import getApiData from '../shared/getApiData.ts';
import ApiData from '../shared/types.ts';
import ErrorButton from '../feature/ErrorButton.tsx';
import './App.css';

interface State {
  searchQuery: string;
  apiData: ApiData[] | null;
}

export class App extends Component {
  state: State = {
    searchQuery: localStorage.getItem('searchQuery') || '',
    apiData: null,
  };

  fetchApiData = async (query?: string) => {
    const data = await getApiData(query);
    this.setState({ apiData: data });
  };

  componentDidMount() {
    this.fetchApiData(this.state.searchQuery);
  }

  render() {
    return (
      <div className="page-wrapper">
        <header>
          <h1>Database of Astronomical Objects</h1>
        </header>
        <main>
          <SearchSection
            searchQuery={this.state.searchQuery}
            fetchApiData={this.fetchApiData}
          />
          <ErrorButton type="button" />
          <ResultSection apiData={this.state.apiData} />
        </main>
      </div>
    );
  }
}

export default App;
