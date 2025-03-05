import { Helmet } from "react-helmet-async";
import { useFetch } from "../../hooks/useFetch";
import ProductsList from "@/components/ProductsList";

export function Home() {
  const { data } = useFetch("https://v2.api.noroff.dev/online-shop");
  console.log(data);

  return (
    <>
      <Helmet>
        <title>Infinite Finds - Where Variety Never Ends</title>
        <meta name="description" content="Infinite Finds - home page" />
      </Helmet>
      <section>
        <ProductsList />
      </section>
    </>
  );
}
