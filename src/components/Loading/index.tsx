import SkeletonCard from "../SkeletonCard";

export default function Loading() {
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
