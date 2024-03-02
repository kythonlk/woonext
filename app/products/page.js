import ProductRow from "@/components/blocks/productsall";
import Header from "@/components/blocks/header";
import Footer from "@/components/blocks/footer";
import Sidebard from "@/components/blocks/productsside";
import {
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDownIcon } from "lucide-react";

const ProductsPage = () => {
  return (
    <div>
      <Header />
      <div className="grid md:grid-cols-[280px_1fr] items-start">
        <div className="hidden md:flex flex-col gap-4 items-start py-2">
          <h1 className="text-2xl font-bold px-4">Products</h1>
          <Sidebard />
        </div>
        <div className="flex flex-col gap-4 items-start py-2">
          <div className="flex justify-end w-full px-4 pt-4">
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
          <ProductRow />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
