import { useFetch } from "@/hooks/useFetch";
import * as S from "./index.styles";
import { baseUrl } from "@/api/Constants";
import { IProduct } from "@/interface";
import ProductCard from "../ProductCard";
import ErrorBoundary from "../ErrorBoundary";
import Loading from "../Loading";

const ProductsList: React.FC = () => {
  const { data, isLoading, isError } = useFetch<IProduct[]>(baseUrl);

  if (isLoading || !data) {
    return <Loading />;
    // create a shadcn ui skeleton
  }

  if (isError) {
    return <div>Could not get products. Please try again.</div>;
  }

  return (
    <>
      <S.Ul>
        {data.map((product) => (
          <li key={product.id} className="mb-3">
            <ErrorBoundary
              fallback={<p>Could not display the product. Please try again.</p>}
            >
              <ProductCard product={product} />
            </ErrorBoundary>
          </li>
        ))}
      </S.Ul>
    </>
  );
};

export default ProductsList;
