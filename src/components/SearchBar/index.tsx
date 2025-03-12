import React, { useState } from "react";
import { IProduct, SearchProps } from "@/interface";
import { Link, useNavigate } from "react-router-dom";
import ProductPrice from "../productComponents/ProductPrice";

const SearchBar: React.FC<
  SearchProps & { data: IProduct[]; isLoading: boolean; isError: boolean }
> = ({ searchTerm, setSearchTerm, data, isLoading, isError }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const searchInputResult =
    searchTerm.trim().length > 0
      ? data.filter(
          (product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description
              ?.toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            product.tags?.some((tag) =>
              tag.toLowerCase().includes(searchTerm.toLowerCase()),
            ),
        )
      : [];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    navigate(`/search?term=${encodeURIComponent(searchTerm)}`);
  };

  if (isLoading || !data) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Could not suggest any results</div>;
  }

  return (
    <div className="mb-4 relative md:max-w-5xl m-auto">
      <form className="flex flex-row" onSubmit={handleSubmit}>
        <label htmlFor="searchInput" className="sr-only">
          Search among all our products
        </label>
        <input
          type="text"
          id="searchInput"
          placeholder="Search for a product"
          autoComplete="off"
          className="w-full border border-primary p-2 bg-neutral-100 grow"
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
        />
        <button
          className="bg-primary text-primary-foreground w-full max-w-20 px-3"
          type="submit"
        >
          Search
        </button>
      </form>

      {/* create a component  */}
      {isOpen && searchTerm.trim().length > 0 && (
        <div className="mt-2 p-4 border border-primary absolute z-10 bg-white w-full">
          <h2 className="font-montserrat mb-3">Suggested products</h2>
          <ul className="flex flex-col gap-3">
            {searchInputResult.length > 0 ? (
              searchInputResult.map((product) => (
                <li key={product.id}>
                  <Link to={`/product/${product.id}`}>
                    <section className="flex flex-row gap-2 items-center text-sm md:text-base">
                      <div className="w-15 h-15">
                        <img
                          className="w-full h-full object-cover"
                          src={product.image.url}
                          alt={product.title}
                        />
                      </div>
                      <h3>{product.title}</h3>
                      <ProductPrice product={product} />
                    </section>
                  </Link>
                </li>
              ))
            ) : (
              <p>No matching products found. Please try again.</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
