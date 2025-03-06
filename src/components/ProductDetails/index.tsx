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

const ProductDetails: React.FC<IProduct> = ({ ...data }) => {
  return (
    <>
      <S.ProductsDetailsGrid>
        <div className="relative h-[415px] max-h-[500px]">
          <ProductImage product={data} />
        </div>

        <div className="sm:ml-4">
          <S.ProductDetailsContainer>
            <ProductRating product={data} />
            <h3 className="uppercase font-montserrat">{data.title}</h3>
            <ul className="flex flex-row gap-3 lowercase font-montserrat text-sm">
              {data.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <ProductPrice product={data} />
          </S.ProductDetailsContainer>

          <Button className="mt-3">Add to cart</Button>

          <div className="mt-5">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-montserrat">
                  Description
                </AccordionTrigger>
                <AccordionContent>{data.description}</AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-montserrat">
                  Reviews
                </AccordionTrigger>
                <ul>
                  {data.reviews.map((review) => (
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
                  ))}
                </ul>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </S.ProductsDetailsGrid>
    </>
  );
};

export default ProductDetails;
