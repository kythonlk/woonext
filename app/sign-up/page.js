"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updateUser } from "@/actions/createuser";
import Header from "@/components/blocks/header";
import Footer from "@/components/blocks/footer";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import AddressForm from "@/components/blocks/addressform";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(6),
  email: z.string().email(),
  phone: z.string(),
});

export default function RegisterForm() {
  const [step, setStep] = useState(1);
  const [registrationData, setRegistrationData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      phone: "",
    },
  });

  const onSubmitInitialForm = async (values) => {
    setRegistrationData(values);
    console.log(values);
    setStep(2);
  };

  const onSubmitFinal = async (addressValues) => {
    setIsLoading(true);
    const finalData = {
      ...registrationData,
      ...addressValues,
    };

    try {
      console.log(finalData);
      // const response = await updateUser(formD);
      //
      // if (response.success) {
      //   setFeedback("User has been successfully created!");
      //   setUserCreated(true);
      // } else {
      //   setFeedback(
      //     response.error || "Failed to create user. Please try again.",
      //   );
      // }
    } catch (error) {
      console.error("Registration error:", error);
      setFeedback("An error occurred during registration.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="mx-auto max-w-5xl space-y-8 p-10 border border-gray-500 rounded-xl m-10">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your information to create an account
          </p>
        </div>
        <div className="space-y-4">
          {step === 1 && (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmitInitialForm)}
                className="space-y-8"
              >
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>User name</FormLabel>
                        <FormControl>
                          <Input placeholder="username" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="a@gmail.com"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+1 555 123-4567"
                            type="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button className="w-full">Next</Button>
              </form>
            </Form>
          )}
          {step === 2 && <AddressForm onSubmit={onSubmitFinal} />}
        </div>
      </div>
      <Footer />
    </>
  );
}
