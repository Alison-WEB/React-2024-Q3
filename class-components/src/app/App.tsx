import { Component } from 'react';
import SearchSection from '../widgets/SearchSection.tsx';
import ErrorSection from '../widgets/ErrorSection.tsx';
import ResultSection from '../widgets/ResultSection.tsx';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <SearchSection />
        <ErrorSection />
        <ResultSection />
      </div>
    );
  }
}

export default App;
