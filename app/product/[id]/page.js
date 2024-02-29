import Header from "@/components/blocks/header";
import { Label } from "@/components/ui/label";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ProductImages from "@/components/blocks/productImages";
import Footer from "@/components/blocks/footer";
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

  const colorOptions = [
    { id: "color-black", value: "black", label: "Black" },
    { id: "color-white", value: "white", label: "White" },
    { id: "color-blue", value: "blue", label: "Blue" },
  ];

  const sizeOptions = [
    { id: "size-xs", value: "xs", label: "XS" },
    { id: "size-s", value: "s", label: "S" },
    { id: "size-m", value: "m", label: "M" },
    { id: "size-l", value: "l", label: "L" },
    { id: "size-xl", value: "xl", label: "XL" },
  ];

  const quantityOptions = [1, 2, 3, 4, 5];

  const addtocartbutton = {
    id: product.id,
    name: product.name,
    price: product.price,
  };

  return (
    <div>
      <Header />
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start  px-20 mx-auto py-6">
        <div className="grid gap-3 items-start px-28">
          <ProductImages images={product.images} />
        </div>
        <div className="grid gap-4 md:gap-10 items-start">
          <div className=" items-start">
            <div className="text-4xl font-bold my-8">LKR {product.price}</div>
            <div className="grid gap-4">
              <h1 className="font-bold text-2xl sm:text-3xl">{product.name}</h1>
              <div>
                <p>
                  {product.categories
                    .map((category) => category.name)
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
          <form className="grid gap-4 md:gap-10">
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="color">
                Color
              </Label>
              <RadioGroup
                className="flex items-center gap-2"
                defaultValue="black"
                id="color"
              >
                {colorOptions.map((color) => (
                  <Label
                    key={color.id}
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                    htmlFor={color.id}
                  >
                    <RadioGroupItem id={color.id} value={color.value} />
                    {color.label}
                  </Label>
                ))}
              </RadioGroup>
            </div>
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="size">
                Size
              </Label>
              <RadioGroup
                className="flex items-center gap-2"
                defaultValue="m"
                id="size"
              >
                {sizeOptions.map((size) => (
                  <Label
                    key={size.id}
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                    htmlFor={size.id}
                  >
                    <RadioGroupItem id={size.id} value={size.value} />
                    {size.label}
                  </Label>
                ))}
              </RadioGroup>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <AddToCartButton product={addtocartbutton} />
              <Button size="lg" variant="outline">
                Add to wishlist
              </Button>
            </div>
          </form>
          <Separator />
          <div className="grid gap-4 text-sm leading-loose">
            <div
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
