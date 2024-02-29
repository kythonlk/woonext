import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/blocks/header";
import Slider from "@/components/blocks/slider";
import ProductRow from "@/components/blocks/productRow";
import Footer from "@/components/blocks/footer";
export default function Home() {
  return (
    <main>
      <Navigation />
      <Slider />
      <ProductRow />
      <Footer />
    </main>
  );
}
