"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { CardContent, Card } from "@/components/ui/card";

export default function ProductCard() {
  return (
    <Card className="rounded-lg overflow-hidden shadow-lg max-w-[300px] mx-auto hover:shadow-xl transition-all duration-200">
      <div className="flex items-center justify-center m-2">
        <Skeleton className="h-72 w-72 rounded" />
      </div>
      <CardContent className="p-4">
        <h2 className="text-lg font-bold hover:text-gray-700 transition-all duration-200">
          <Skeleton className="h-4 w-[250px]" />
        </h2>
        <div className="mt-4 text-base font-semibold">
          <Skeleton className="h-4 w-[250px]" />
        </div>
        <div className="flex mt-4 space-x-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-4 w-40" />
        </div>
      </CardContent>
    </Card>
  );
}
