import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Component() {
  return (
    <section className="grid md:grid-cols-[240px_1fr] items-start">
      <div className="flex flex-col gap-4 items-start py-2">
        <Accordion className="w-full" collapsible type="single">
          <AccordionItem value="price">
            <AccordionTrigger className="text-base">Price</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-2">
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="price-under-25" />
                  Under $25{"\n                              "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="price-25-50" />
                  $25 - $50{"\n                              "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="price-50-100" />
                  $50 - $100{"\n                              "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="price-100-200" />
                  $100 - $200{"\n                              "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="price-over-200" />
                  Over $200{"\n                              "}
                </Label>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="brand">
            <AccordionTrigger className="text-base">Brand</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-2">
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="brand-nike" />
                  Nike{"\n                              "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="brand-adidas" />
                  Adidas{"\n                              "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="brand-puma" />
                  Puma{"\n                              "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="brand-jordan" />
                  Jordan{"\n                              "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="brand-reebok" />
                  Reebok{"\n                              "}
                </Label>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="category">
            <AccordionTrigger className="text-base">Category</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-2">
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="category-shoes" />
                  Shoes{"\n                              "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="category-tops" />
                  Tops & T-Shirts{"\n                              "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="category-shorts" />
                  Shorts{"\n                              "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="category-hoodies" />
                  Hoodies & Pullovers{"\n                              "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="category-pants" />
                  Pants & Tights{"\n                              "}
                </Label>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="color">
            <AccordionTrigger className="text-base">Color</AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-2">
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="color-black" />
                  Black{"\n                              "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="color-white" />
                  White{"\n                              "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="color-red" />
                  Red{"\n                              "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="color-blue" />
                  Blue{"\n                              "}
                </Label>
                <Label className="flex items-center gap-2 font-normal">
                  <Checkbox id="color-green" />
                  Green{"\n                              "}
                </Label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="grid gap-6 md:gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold tracking-tight">
              Summer Collection
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Hot Picks from the Summer Collection: Embrace the Season in Style!
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="ml-auto shrink-0 md:ml-auto md:order-last"
                variant="outline"
              >
                <ArrowUpDownIcon className="w-4 h-4 mr-2" />
                Sort by
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuRadioGroup value="featured">
                <DropdownMenuRadioItem value="featured">
                  Featured
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Newest">
                  Newest
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="low">
                  Price: Low to High
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="high">
                  Price: High to Low
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="relative group">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Cover image"
              className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
              height={200}
              src="/placeholder.svg"
              width={200}
            />
            <div className="flex-1 py-4">
              <h3 className="font-semibold tracking-tight">
                Beach Bliss Flip-Flops
              </h3>
              <small className="text-sm leading-none text-gray-500 dark:text-gray-400">
                Comfortable Footwear
              </small>
              <h4 className="font-semibold">$19.99</h4>
            </div>
          </div>
          <div className="relative group">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Cover image"
              className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
              height={200}
              src="/placeholder.svg"
              width={200}
            />
            <div className="flex-1 py-4">
              <h3 className="font-semibold tracking-tight">
                Sunset Shades Sunglasses
              </h3>
              <small className="text-sm leading-none text-gray-500 dark:text-gray-400">
                UV Protection Eyewear
              </small>
              <h4 className="font-semibold">$29.99</h4>
            </div>
          </div>
          <div className="relative group">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Cover image"
              className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
              height={200}
              src="/placeholder.svg"
              width={200}
            />
            <div className="flex-1 py-4">
              <h3 className="font-semibold tracking-tight">
                Cool Breeze Portable Fan
              </h3>
              <small className="text-sm leading-none text-gray-500 dark:text-gray-400">
                On-the-Go Cooling
              </small>
              <h4 className="font-semibold">$14.99</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowUpDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  );
}
