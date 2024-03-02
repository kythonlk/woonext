"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/blocks/header";
import Footer from "@/components/blocks/footer";

export default function LoginForm() {
  return (
    <>
      <Header />
      <div className="flex items-center px-4 sm:px-6 lg:p-8">
        <div className="w-full max-w-lg mx-auto space-y-8 border border-gray-500 rounded-xl p-16">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  className="ml-auto inline-block text-sm underline"
                  href="#"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" required type="password" />
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
            <Button className="w-full" variant="outline">
              Login with Google
            </Button>
          </div>
          <div className="space-y-4 text-center text-sm">
            Don't have an account?
            <Link className="underline ml-2" href="./sign-up">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
