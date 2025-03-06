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

const ProductDetails: React.FC<IProduct> = ({ ...data }) => {
  return (
    <>
      <section className="flex gap-4 m-auto flex-col items-center md:items-start md:flex-row md:max-w-11/12">
        <div className="relative h-[415px] max-h-[500px]">
          <ProductImage product={data} />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
            <ProductRating product={data} />
            <h3 className="uppercase font-montserrat">{data.title}</h3>
            <ul className="flex flex-row gap-3 lowercase font-montserrat text-sm">
              {data.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <ProductPrice product={data} />
          </div>
          <Button>Add to cart</Button>
          <div className="flex flex-col items-start">
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
                  {data.reviews.map(
                    (review) => (
                      console.log(review),
                      (
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
                      )
                    ),
                  )}
                </ul>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
