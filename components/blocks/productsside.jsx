"use client";

import { useState } from "react";
import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const FilterAccordion = ({ setPriceFilter, setCategoryFilter }) => {
  const [selectedPriceFilters, setSelectedPriceFilters] = useState([]);
  const [selectedCategoryFilters, setSelectedCategoryFilters] = useState([]);

  const handlePriceChange = (value) => {
    const updatedFilters = selectedPriceFilters.includes(value)
      ? selectedPriceFilters.filter((filter) => filter !== value)
      : [...selectedPriceFilters, value];
    setSelectedPriceFilters(updatedFilters);
    setPriceFilter(updatedFilters);
  };

  const handleCategoryChange = (value) => {
    const updatedFilters = selectedCategoryFilters.includes(value)
      ? selectedCategoryFilters.filter((filter) => filter !== value)
      : [...selectedCategoryFilters, value];
    setSelectedCategoryFilters(updatedFilters);
    setCategoryFilter(updatedFilters);
  };

  const accordionData = [
    {
      value: "price",
      triggerText: "Price",
      checkboxes: [
        { id: "price-under-25", label: "Under $25", value: "0-25" },
        { id: "price-25-50", label: "$25 - $50", value: "25-50" },
        { id: "price-50-100", label: "$50 - $100", value: "50-100" },
        { id: "price-100-200", label: "$100 - $200", value: "100-200" },
        { id: "price-over-200", label: "Over $200", value: "over-200" },
      ],
      onChange: handlePriceChange,
    },
    {
      value: "category",
      triggerText: "Category",
      checkboxes: [
        { id: "category-clothing", label: "Clothing", value: "clothing" },
        {
          id: "category-accessories",
          label: "Accessories",
          value: "accessories",
        },
        { id: "category-hoodies", label: "Hoodies", value: "hoodies" },
        {
          id: "category-tshirts",
          label: "T-Shirts",
          value: "tshirts",
        },
        { id: "category-music", label: "Music", value: "music" },
        { id: "category-decor", label: "Decor", value: "decor" },
      ],
      onChange: handleCategoryChange,
    },
  ];

  return (
    <Accordion className="w-full px-4" collapsible type="single">
      {accordionData.map((section) => (
        <AccordionItem key={section.value} value={section.value}>
          <AccordionTrigger>{section.triggerText}</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              {section.checkboxes.map((checkbox) => (
                <div key={checkbox.id} className="flex items-center gap-2">
                  <Checkbox
                    id={checkbox.id}
                    checked={
                      section.value === "price"
                        ? selectedPriceFilters.includes(checkbox.value)
                        : selectedCategoryFilters.includes(checkbox.value)
                    }
                    onCheckedChange={() => section.onChange(checkbox.value)}
                  />
                  <Label htmlFor={checkbox.id}>{checkbox.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FilterAccordion;
