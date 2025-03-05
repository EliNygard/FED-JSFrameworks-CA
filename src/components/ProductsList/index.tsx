import { useFetch } from "@/hooks/useFetch";
import * as S from "./index.styles";
import { baseUrl } from "@/api/Constants";
import { IProduct } from "@/interface";

const ProductsList: React.FC = () => {
  const { data, isLoading, isError } = useFetch<IProduct[]>(baseUrl);

  if (isLoading || !data) {
    return <div>Loading products...</div>;
    // create a shadcn ui ghost or what it's called
  }

  if (isError) {
    return <div>Could not get products. Please try again.</div>;
  }

  return (
    <>
      <h3>Products list</h3>
      <S.Ul>
        {data.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </S.Ul>
    </>
  );
};

export default ProductsList;
