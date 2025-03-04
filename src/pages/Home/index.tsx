import { useFetch } from "../../hooks/useFetch";

export function Home() {
  const { data } = useFetch("https://v2.api.noroff.dev/online-shop");
  console.log(data);

  return (
    <>
      <h1>Home page</h1>
      <h2>Here comes products</h2>
    </>
  );
}
