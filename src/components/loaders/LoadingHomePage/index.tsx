import SkeletonSearchBar from "@/components/skeletons/SkeletonSearchBar";
import SkeletonCard from "../../skeletons/SkeletonCard";

export default function LoadingHomePage() {
  return (
    <main>
      <SkeletonSearchBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {"abcdefghi".split("").map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  );
}
