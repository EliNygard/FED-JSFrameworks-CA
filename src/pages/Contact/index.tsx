import React from "react";
import { ContactForm } from "@/components/ContactForm";
import SearchBar from "@/components/SearchBar";
import { SearchProps } from "@/interface";
import { Helmet } from "react-helmet-async";

export const Contact: React.FC<SearchProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <>
      <Helmet>
        <title>Infinite Finds - Contact us</title>
        <meta name="description" content="Infinite Finds - contact us" />
      </Helmet>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <section className="border border-black mt-8 mb-8 p-3 sm:max-w-9/12 m-auto">
        <div className="my-3">
          <ContactForm />
        </div>
      </section>
    </>
  );
};
