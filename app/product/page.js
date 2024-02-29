import AddToCartButton from "@/components/blocks/addtocart";

const ProductPage = () => {
  const product = {
    id: 4,
    name: "Awesome Product",
    price: 260,
    description: "This is an awesome product description.",
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl">
      <AddToCartButton product={product} />
    </div>
  );
};

export default ProductPage;
