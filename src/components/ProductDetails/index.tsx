import { IProduct } from "@/interface";

const ProductDetails: React.FC<IProduct> = ({ ...data }) => {
  return (
    <section>
      <div>
        <img src={data.image.url} alt={data.title} />
      </div>
    </section>
  );
};

export default ProductDetails;
