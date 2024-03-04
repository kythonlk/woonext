"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Slider() {
  return (
    <Carousel className="w-full md:max-w-[1400px] lg:max-w-[1780px] mx-auto">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent
                  className="bg-img flex items-center justify-center p-4 h-[800px]"
                  style={{
                    backgroundImage: `url(/slider.jpeg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "0.5rem",
                  }}
                >
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <p className="text-4xl font-semibold">
                      Most Popular Products
                    </p>
                    <Link href="./products" className="text-xl font-semibold">
                      <Button className="my-4">View All</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
