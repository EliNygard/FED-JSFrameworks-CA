import SkeletonProductPage from "@/components/skeletons/SkeletonProductPage";
import SkeletonSearchBar from "@/components/skeletons/SkeletonSearchBar";

export default function LoadingProductPage() {
  return (
    <main>
      <SkeletonSearchBar />
      <SkeletonProductPage />
    </main>
  );
}
