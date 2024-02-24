import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/blocks/nav";
import Slider from "@/components/blocks/slider";
import ProductRow from "@/components/blocks/productRow";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Slider />
      <ProductRow />
    </main>
  );
}
