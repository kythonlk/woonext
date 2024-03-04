"use client";

import { useState } from "react";
import {
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDownIcon } from "lucide-react";

const Sort = ({ setSort }) => {
  const [selectedSort, setSelectedSort] = useState("featured");

  const handleSortChange = (value) => {
    setSelectedSort(value);
    setSort(value);
  };

  return (
    <div className="flex justify-end w-full px-4 pt-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="ml-auto shrink-0 md:ml-auto md:order-last"
            variant="outline"
          >
            <ArrowUpDownIcon className="w-4 h-4 mr-2" />
            Sort by
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuRadioGroup
            value={selectedSort}
            onValueChange={handleSortChange}
          >
            <DropdownMenuRadioItem value="featured">
              Featured
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="Newest">Newest</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="low">
              Price: Low to High
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="high">
              Price: High to Low
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Sort;
