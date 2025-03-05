import { useState } from "react";

export function SearchBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="mb-4 relative">
      <form className="">
        <input
          type="text"
          placeholder="Search for a product"
          className="w-full border border-primary p-2"
          onFocus={() => setIsOpen(true)}
        />
      </form>

      {isOpen && (
        <div className="mt-2 p-4 border border-primary absolute z-10 bg-amber-50 w-full">
          <h2>Suggested search</h2>
          <button>Perfume</button>
          <button>Earbuds</button>
          <button>Sneakers</button>
          <h2>Popular products</h2>
        </div>
      )}
    </div>
  );
}
