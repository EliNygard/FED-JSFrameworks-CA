import { Helmet } from "react-helmet-async";
import { useFetch } from "../../hooks/useFetch";
import ProductsList from "@/components/ProductsList";
import { SearchBar } from "@/components/SearchBar";
import { IProduct } from "@/interface";
import { baseUrl } from "@/api/Constants";
import Loading from "@/components/Loading";

export function Home() {
  const { data, isLoading, isError } = useFetch<IProduct[]>(baseUrl);
  console.log(data);

  if (isLoading || !data) {
    return <Loading />;
  }

  if (isError) {
    return <div>Could not get products. Please try again.</div>;
  }

  return (
    <>
      <Helmet>
        <title>Infinite Finds - Where Variety Never Ends</title>
        <meta name="description" content="Infinite Finds - home page" />
      </Helmet>
      <SearchBar></SearchBar>
      <section>
        <ProductsList data={data} />
      </section>
    </>
  );
}
