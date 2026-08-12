export const EpisodeDetailSkeleton = () => {
	return (
		<div className="py-4 px-6">
			<div className="h-7 w-3/4 bg-neutral-200 rounded animate-pulse" />
			<div className="flex flex-col gap-2">
				<div className="h-4 w-full bg-neutral-200 rounded animate-pulse" />
				<div className="h-4 w-full bg-neutral-200 rounded animate-pulse" />
				<div className="h-4 w-5/6 bg-neutral-200 rounded animate-pulse" />
				<div className="h-4 w-2/3 bg-neutral-200 rounded animate-pulse" />
			</div>
			<div className="max-w-4xl mt-4 w-full">
				<div className="h-10 w-full bg-neutral-200 rounded-full animate-pulse" />
			</div>
		</div>
	);
};
