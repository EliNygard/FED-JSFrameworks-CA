import SkeletonCard from "../../skeletons/SkeletonCard";

export default function LoadingCard() {
  return (
    <main>
      <div className="grid grid-cols-1 gap-4">
        {"abcdefghi".split("").map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  );
}
