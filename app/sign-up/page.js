"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { updateUser } from "@/actions/createuser";
import Header from "@/components/blocks/header";
import Footer from "@/components/blocks/footer";

export default function RegisterForm({ userId }) {
  const [userCreated, setUserCreated] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const response = await updateUser(userId, formData);

      if (response.success) {
        setFeedback("User has been successfully created!");
        setUserCreated(true);
      } else {
        setFeedback(
          response.error || "Failed to create user. Please try again.",
        );
      }
    } catch (error) {
      console.error("Registration error:", error);
      setFeedback("An error occurred during registration.");
    } finally {
      setIsLoading(false);
    }
  };

  if (userCreated) {
    return (
      <>
        <Header />
        <div className="text-center">
          <p className="mb-4 text-green-600">{feedback}</p>
          <Link href="/account">
            <span className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login to Account
            </span>
          </Link>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <div className="flex items-center  px-4 sm:px-6 lg:p-8">
        <div className="w-full max-w-lg mx-auto space-y-8 border border-gray-500 rounded-xl p-16">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Register</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your email below to create your account
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">User Name</Label>
              <Input
                id="username"
                placeholder="Username"
                name="username"
                required
                type="text"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                name="email"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" required type="password" />
            </div>
            <Button className="w-full" type="submit">
              {isLoading ? "Creating..." : "Sign Up"}
            </Button>
          </form>
          {feedback && (
            <p
              className={
                feedback.startsWith("User has been")
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {feedback}
            </p>
          )}
          <div className="space-y-4 text-center text-sm">
            Already have an account?
            <Link className="underline ml-2" href="./login">
              Login
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
