import { IProduct } from "@/interface";
import ProductImage from "../productComponents/ProductImage";
import ProductPrice from "../productComponents/ProductPrice";
import ProductRating from "../productComponents/ProductRating";
import Button from "../Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as S from "./index.styles";
import useAddToCart from "@/hooks/useAddToCart";
import ErrorBoundary from "../ErrorBoundary";

const ProductDetails: React.FC<IProduct> = ({ ...data }) => {
  const handleAddToCart = useAddToCart();

  return (
    <S.ProductsDetailsGrid>
      <div className="relative h-[415px] max-h-[500px]">
        <ErrorBoundary fallback={<p>Could not load product image</p>}>
          <ProductImage product={data} />
        </ErrorBoundary>
      </div>

      <div className="sm:ml-4">
        <S.ProductDetailsContainer>
          <ErrorBoundary fallback={<p>Could not load product rating</p>}>
            <ProductRating product={data} />
          </ErrorBoundary>
          <h3 className="uppercase font-montserrat">{data.title}</h3>
          <ul className="flex flex-row gap-3 lowercase font-montserrat text-sm">
            {data.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <ErrorBoundary fallback={<p>Could not load price</p>}>
            <ProductPrice
              price={data.price}
              discountedPrice={data.discountedPrice}
            />
          </ErrorBoundary>
        </S.ProductDetailsContainer>

        <Button className="mt-3" onClick={() => handleAddToCart(data)}>
          Add to cart
        </Button>

        <div className="mt-5">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-montserrat">
                Description
              </AccordionTrigger>
              <ErrorBoundary fallback={<p>Could not load description</p>}>
                <AccordionContent>{data.description}</AccordionContent>
              </ErrorBoundary>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-montserrat">
                Reviews
              </AccordionTrigger>
              <ul>
                {data.reviews.length > 0 ? (
                  data.reviews.map((review) => (
                    <li key={review.id}>
                      <AccordionContent>
                        <div className="border border-accent-foreground p-3">
                          <div className="flex flex-row justify-between">
                            <p>{review.username}</p>
                            <p>Rating: {review.rating}</p>
                          </div>
                          <p className="mt-2">{review.description}</p>
                        </div>
                      </AccordionContent>
                    </li>
                  ))
                ) : (
                  <AccordionContent>
                    <div>This product has no reviews yet.</div>
                  </AccordionContent>
                )}
              </ul>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </S.ProductsDetailsGrid>
  );
};

export default ProductDetails;
