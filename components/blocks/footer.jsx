import Link from "next/link";
import { InstagramIcon, TwitterIcon, FacebookIcon } from "lucide-react";

export default function Component() {
  return (
    <footer className="w-full py-12 bg-gray-100">
      <div className="px-4 md:px-12">
        <div className="grid gap-8 lg:grid-cols-2 xl:gap-12">
          <div className="flex flex-col gap-4">
            <Link className="font-semibold" href="#">
              <span className="sr-only">Home</span>
              <h2 className="text-3xl">Crizalapparel</h2>
            </Link>
            <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
              High-quality tools and materials for your next DIY project. Each
              purchase supports our community workshops.
            </p>
            <div className="flex gap-4 text-2xl">
              <Link
                className="rounded-full border border-gray-200 border-gray-200 hover:border-gray-800 hover:text-gray-900 dark:border-gray-800 dark:hover:border-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <TwitterIcon className="w-4 h-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                className="rounded-full border border-gray-200 border-gray-200 hover:border-gray-800 hover:text-gray-900 dark:border-gray-800 dark:hover:border-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <InstagramIcon className="w-4 h-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                className="rounded-full border border-gray-200 border-gray-200 hover:border-gray-800 hover:text-gray-900 dark:border-gray-800 dark:hover:border-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <FacebookIcon className="w-4 h-4" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
          <div className="grid gap-4 text-sm md:grid-cols-2 md:gap-8">
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">About Us</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#">Our Story</Link>
                </li>
                <li>
                  <Link href="#">Workshops</Link>
                </li>
                <li>
                  <Link href="#">Press</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">Contact</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#">Support</Link>
                </li>
                <li>
                  <Link href="#">Sales</Link>
                </li>
                <li>
                  <Link href="#">Press</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">FAQ</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#">Shipping & Delivery</Link>
                </li>
                <li>
                  <Link href="#">Returns</Link>
                </li>
                <li>
                  <Link href="#">Ordering</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold">Shipping & Returns</h3>
              <p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                See our
                <Link className="underline underline-offset-2" href="#">
                  return policy
                </Link>
                for more information on returns and exchanges.
              </p>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 flex-1 dark:text-gray-400">
          Crizalapparel © 2024 All rights reserved.Developed by kythonlk
        </p>
      </div>
    </footer>
  );
}
