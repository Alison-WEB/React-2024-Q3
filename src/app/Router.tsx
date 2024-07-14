import { Routes, Route } from 'react-router-dom';
import SearchSection from '../widgets/SearchSection.tsx';
import ResultSection from '../widgets/ResultSection.tsx';
import ApiData from '../shared/types.ts';
import './App.css';

const Router = ({
  searchQuery,
  setSearchQuery,
  fetchApiData,
  apiData,
}: {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  fetchApiData: (query?: string) => void;
  apiData: ApiData[] | null;
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <SearchSection
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              fetchApiData={fetchApiData}
            />
            <ResultSection apiData={apiData} />
          </>
        }
      />
      <Route
        path="/search/"
        element={
          <>
            <SearchSection
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              fetchApiData={fetchApiData}
            />
            <ResultSection apiData={apiData} />
          </>
        }
      />
      <Route
        path={`/search/${searchQuery}`}
        element={
          <>
            <SearchSection
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              fetchApiData={fetchApiData}
            />
            <ResultSection apiData={apiData} />
          </>
        }
      />
    </Routes>
  );
};

export default Router;
