import { IProduct } from "@/interface";
import ProductImage from "../productComponents/ProductImage";
import ProductPrice from "../productComponents/ProductPrice";
import ProductRating from "../productComponents/ProductRating";
import Button from "../Button";

const ProductDetails: React.FC<IProduct> = ({ ...data }) => {
  return (
    <section className="flex gap-4 m-auto flex-col items-center md:items-start md:flex-row max-w-11/12">
      <div className="relative h-[415px] max-h-[500px]">
        <ProductImage product={data} />
      </div>
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
    </section>
  );
};

export default ProductDetails;
