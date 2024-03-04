import SkeletonProduct from "@/components/blocks/productSkeleton";

export default function SkeletonSet() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-2 md:p-4 md:my-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <SkeletonProduct key={index} />
      ))}
    </div>
  );
}
