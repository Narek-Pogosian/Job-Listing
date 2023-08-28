import SkeletonCard from "./SkeletonCard";

const SkeletonList = () => {
  const arr = new Array(6).fill(0);

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {arr.map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export default SkeletonList;
