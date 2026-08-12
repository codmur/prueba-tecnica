export const EpisodeSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 bg-white rounded-2xl shadow-sm px-4 py-3">
      <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
      <div className="flex justify-between items-center">
        <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  );
};