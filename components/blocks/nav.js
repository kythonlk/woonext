import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBagIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-10 bg-white shadow dark:shadow-lg">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        <Link className="flex-col pr-8" href="#">
          <ShoppingBagIcon className="h-6 w-6 mx-auto" />
          <p className="">Acme Inc</p>
        </Link>
        <nav className="hidden space-x-8 md:flex flex-1 min-w-0 items-center text-sm font-medium">
          <Link className="flex items-center" href="#">
            Clothing
          </Link>
          <Link className="flex items-center" href="#">
            Electronics
          </Link>
          <Link className="flex items-center" href="#">
            Home & Kitchen
          </Link>
          <Link className="flex items-center" href="#">
            Books
          </Link>
          <Link className="flex items-center" href="#">
            Baby
          </Link>
          <Link className="flex items-center" href="#">
            Automotive
          </Link>
        </nav>
        <div className="flex-1 min-w-0">
          <form className="w-full flex md:ml-4">
            <Input
              className="max-w-[400px] flex-1 md:mr-2"
              placeholder="Search for products..."
              type="search"
            />
            <Button className="" type="submit" variant="outline">
              <SearchIcon className="h4 w-4" />
            </Button>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link className="text-sm font-medium" href="#">
            Sign in
          </Link>
          <Link className="text-sm font-medium" href="#">
            Create account
          </Link>
          <Link
            className="rounded-lg bg-gray-100  flex items-center justify-center hover:bg-gray-100/50 dark:bg-gray-800 dark:hover:bg-gray-800/50"
            href="#"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="sr-only">Shopping cart</span>
            <Badge className="ml-auto">3</Badge>
          </Link>
        </div>
      </div>
    </header>
  );
}
