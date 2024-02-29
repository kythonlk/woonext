import ProductImages from "@/components/blocks/productImages";
import AddToCartButton from "@/components/blocks/addtocart";

const ProductPage = async ({ params }) => {
  let product;

  try {
    const url = `${process.env.NEXT_PUBLIC_WP_REST}/products/${params.id}/?consumer_key=${process.env.NEXT_PUBLIC_WOO_KEY}&consumer_secret=${process.env.NEXT_PUBLIC_WOO_SECRET}`;
    const response = await fetch(url);
    console.log("response", url);
    if (!response.ok) {
      throw new Response("Product not found", { status: 404 });
    }

    product = await response.json();
  } catch (error) {
    console.error("Failed to fetch product:", error);

    return <div className="bg-white">Product not found</div>;
  }

  const addtocartbutton = {
    id: product.id,
    name: product.name,
    price: product.price,
    quantity,
  };

  return (
    <div>
      <div className="grid gap-3 items-start px-28">
        <ProductImages images={product.images} />
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className=" items-start">
          <div className="text-4xl font-bold my-8">LKR {product.price}</div>
        </div>
        <form className="grid gap-4 md:gap-10">
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <AddToCartButton product={addtocartbutton} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductPage;
