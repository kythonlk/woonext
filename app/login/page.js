"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/blocks/header";
import Footer from "@/components/blocks/footer";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const base64Credentials = btoa(`${username}:${password}`);
    localStorage.setItem("base64Credentials", base64Credentials);
    const loginEndpoint = `${process.env.NEXT_PUBLIC_WP}/users/${username}`;

    try {
      console.log(base64Credentials, username, password);
      const response = await fetch(loginEndpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${base64Credentials}`,
        },
      });

      if (!response.ok) {
        localStorage.removeItem("base64Credentials");
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("Login Success:", data);

      router.push("./account");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex items-center px-4 sm:px-6 lg:p-8">
        <div className="w-full max-w-lg mx-auto space-y-8 border border-gray-500 rounded-xl p-16">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Enter your details below to login to your account
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">User Name</Label>
              <Input
                id="username"
                placeholder="Enter User Name"
                required
                type="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>
          <div className="space-y-4 text-center text-sm">
            Don &apos; t have an account?
            <Link href="./sign-up">
              <p className="underline">Sign up</p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
