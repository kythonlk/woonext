import dynamic from "next/dynamic";
import Header from "@/components/blocks/header";
import Footer from "@/components/blocks/footer";

const Cart = dynamic(() => import("@/components/blocks/cartd"), { ssr: false });

export default function Page() {
  return (
    <div>
      <Header />
      <Cart />
      <Footer />
    </div>
  );
}
