import { useFetch } from "@/hooks/useFetch";
import * as S from "./index.styles";
import { baseUrl } from "@/api/Constants";
import { IProduct } from "@/interface";
import ProductCard from "../ProductCard";

const ProductsList: React.FC = () => {
  const { data, isLoading, isError } = useFetch<IProduct[]>(baseUrl);

  if (isLoading || !data) {
    return <div>Loading products...</div>;
    // create a shadcn ui skeleton
  }

  if (isError) {
    return <div>Could not get products. Please try again.</div>;
  }

  return (
    <>
      <S.Ul>
        {data.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </S.Ul>
    </>
  );
};

export default ProductsList;
