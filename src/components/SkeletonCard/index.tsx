import { Skeleton } from "../ui/skeleton";

export default function SkeletonCard() {
  return (
    <>
      <Skeleton className="w-full h-96" />
      <Skeleton className="w-1/2 h-4 rounded-md" />
      <Skeleton className="w-2/3 h-6 rounded-md" />
      <div className="flex gap-4">
        <Skeleton className="h-4 w-10 rounded-md" />
        <Skeleton className="h-4 w-10 rounded-md" />
      </div>
      <Skeleton className="w-full h-10 mb-4 rounded-2xl" />
    </>
  );
}
