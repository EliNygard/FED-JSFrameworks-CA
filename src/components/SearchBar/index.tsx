import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?term=${encodeURIComponent(searchTerm)}`);
  };
  return (
    <div className="mb-4 relative md:max-w-9/12 m-auto">
      <form className="flex flex-row" onSubmit={handleSubmit}>
        <label htmlFor="searchInput" className="sr-only">
          Search among all our products
        </label>
        <input
          type="text"
          id="searchInput"
          placeholder="Search for a product"
          autoComplete="on"
          className="w-full border border-primary p-2 bg-neutral-100 grow"
          onFocus={() => setIsOpen(true)}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-primary text-primary-foreground w-full max-w-20 px-3"
          type="submit"
        >
          Search
        </button>
      </form>

      {isOpen && (
        <div className="mt-2 p-4 border border-primary absolute z-10 bg-amber-50 w-full">
          <h2>Suggested search</h2>
          <button>Beauty</button>
          <button>Watch</button>
          <button>Earbuds</button>
          <h2>Popular products</h2>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
