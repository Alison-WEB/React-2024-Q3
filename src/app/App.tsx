import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router.tsx';
import getApiData from '../shared/getApiData.ts';
import { ApiData } from '../shared/types.ts';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem('searchQuery') || ''
  );
  const [apiData, setApiData] = useState<ApiData | null>(null);

  const fetchApiData = async (query?: string) => {
    const data = await getApiData(query);
    setApiData(data);
  };

  useEffect(() => {
    fetchApiData(searchQuery);
  }, [searchQuery]);

  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <header>
          <h1>Database of Astronomical Objects</h1>
        </header>
        <div>
          Dear reviewer! I didn't have time to finish the assignment, but I plan
          to get it done within the next few days. Please check back on August
          1st.
        </div>
        <div>---</div>
        <main>
          <Router
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            fetchApiData={fetchApiData}
            apiData={apiData}
          />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
