import React from "react";
import { Helmet } from "react-helmet-async";

interface SearchProps {
  searchTerm: string;
}
export const Search: React.FC<SearchProps> = ({ searchTerm }) => {
  return (
    <>
      <Helmet>
        <title>Infinite Finds - Search</title>
        <meta name="description" content="Infinite Finds - search" />
      </Helmet>
      <h1>{searchTerm}</h1>
    </>
  );
};
