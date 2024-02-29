import dynamic from "next/dynamic";

const Cart = dynamic(() => import("@/components/blocks/cartd"), { ssr: false });

export default function Page() {
  return (
    <div>
      <Cart />
    </div>
  );
}
