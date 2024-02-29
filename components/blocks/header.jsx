import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/blocks/nav"), { ssr: false });

export default function Headercn() {
  return (
    <div>
      <Header />
    </div>
  );
}
