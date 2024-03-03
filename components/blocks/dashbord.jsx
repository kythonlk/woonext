"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  HomeIcon,
  UsersIcon,
  ShoppingCartIcon,
  LineChartIcon,
  Package2Icon,
  PackageIcon,
} from "lucide-react";
import AccountTable from "@/components/blocks/accounttable";

const navItems = [
  {
    href: "#home",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "#orders",
    label: "Orders",
    icon: ShoppingCartIcon,
    badge: 12,
  },
  {
    href: "#products",
    label: "Products",
    icon: PackageIcon,
  },
  {
    href: "#customers",
    label: "Customers",
    icon: UsersIcon,
  },
  {
    href: "#analytics",
    label: "Analytics",
    icon: LineChartIcon,
  },
];

export default function Component() {
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const base64Credentials = localStorage.getItem("base64Credentials");
    if (!base64Credentials) {
      console.log("No session found, redirecting to login");
      router.push("/login");
      return;
    }

    const fetchUserData = async () => {
      const loginEndpoint = `${process.env.NEXT_PUBLIC_WP}/users`;
      try {
        const response = await fetch(loginEndpoint, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${base64Credentials}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [router]);

  if (!userData)
    return (
      <>
        <div className="flex p-8"> create new account or login</div>
        <Link href={"./login"}>login</Link>
      </>
    );

  const avatar = userData[0].avatar_urls[48];
  const name = userData[0].name;
  console.log(avatar);

  const handleLogout = () => {
    localStorage.removeItem("base64Credentials");
    router.push("/login");
  };
  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex flex-col gap-2">
          <div className="flex h-[60px] items-center px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <span className="text-xl">Hello, {name}</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-4 text-sm font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${item.badge ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50" : ""}`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                  {item.badge && (
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full">
            <h1 className="font-semibold text-lg">Recent Orders</h1>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border w-8 h-8"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="48"
                  src={avatar}
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "cover",
                  }}
                  width="48"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="border shadow-sm rounded-lg p-2">
            <AccountTable />
          </div>
        </main>
      </div>
    </div>
  );
}
