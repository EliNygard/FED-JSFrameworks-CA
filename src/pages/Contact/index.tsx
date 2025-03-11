import { ContactForm } from "@/components/ContactForm";
import SearchBar from "@/components/SearchBar";
import React from "react";
import { Helmet } from "react-helmet-async";

interface ContactProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const Contact: React.FC<ContactProps> = ({
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

      <section className="border border-black mt-8 mb-8 p-3">
        <h1 className="font-montserrat text-lg mb-6">Send us a message</h1>
        <div className="my-3">
          <ContactForm />
        </div>
      </section>
    </>
  );
};
