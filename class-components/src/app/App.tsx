import { Component } from 'react';
import SearchSection from '../widgets/SearchSection.tsx';
import ResultSection from '../widgets/ResultSection.tsx';
import getApiData from '../shared/getApiData.ts';
import ApiData from '../shared/types.ts';
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
    console.log(this.state.searchQuery);
  }

  render() {
    return (
      <div>
        <SearchSection {...this.state} />
        <ResultSection {...this.state} />
      </div>
    );
  }
}

export default App;
