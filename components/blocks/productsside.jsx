import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Component() {
  return (
    <Accordion className="w-full px-4" collapsible type="single">
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
  );
}
