import { Component } from 'react';
import SearchSection from '../widgets/SearchSection.tsx';
import ResultSection from '../widgets/ResultSection.tsx';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <SearchSection />
        <ResultSection />
      </div>
    );
  }
}

export default App;
