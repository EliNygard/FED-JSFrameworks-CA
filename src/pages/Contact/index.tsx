import React from "react";
import { ContactForm } from "@/components/ContactForm";
import SearchBar from "@/components/SearchBar";
import { IProduct, SearchProps } from "@/interface";
import { Helmet } from "react-helmet-async";

export const Contact: React.FC<
  SearchProps & { data: IProduct[]; isLoading: boolean; isError: boolean }
> = ({ searchTerm, setSearchTerm, data, isLoading, isError }) => {
  return (
    <>
      <Helmet>
        <title>Infinite Finds - Contact us</title>
        <meta name="description" content="Infinite Finds - contact us" />
      </Helmet>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        data={data}
        isLoading={isLoading}
        isError={isError}
      />

      <section className="border border-black mt-8 mb-8 p-3 sm:max-w-2xl m-auto">
        <div className="my-3">
          <ContactForm />
        </div>
      </section>
    </>
  );
};
