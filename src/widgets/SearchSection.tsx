import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KeyboardEvent, ChangeEvent, FormEvent } from 'react';
import SearchButton from '../feature/SearchButton.tsx';
import './SearchSection.css';

const SearchSection = ({
  searchQuery,
  setSearchQuery,
  fetchApiData,
}: {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  fetchApiData: (query?: string) => void;
}) => {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalSearchQuery(e.currentTarget.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    setLocalSearchQuery(e.currentTarget.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('searchQuery', localSearchQuery.trim() || '');
    setSearchQuery(localSearchQuery);
    await fetchApiData(localSearchQuery);
    navigate(`/search/${localSearchQuery}`);
  };

  return (
    <section className="search-section">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={localSearchQuery ?? ''}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          onKeyUp={handleKeyPress}
          maxLength={20}
          autoFocus
        />
        <SearchButton />
      </form>
    </section>
  );
  // }
};

export default SearchSection;
