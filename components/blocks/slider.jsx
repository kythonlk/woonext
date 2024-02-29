"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

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
                    backgroundImage: `url(https://dev.zamaro.ae/wp-content/uploads/2024/02/photo-1580682312385-e94d8de1cf3c-scaled.jpeg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "0.5rem",
                  }}
                >
                  <span className="text-4xl font-semibold">{index + 1}</span>
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
