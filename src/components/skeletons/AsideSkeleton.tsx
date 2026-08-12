export const AsideSkeleton = () => {
	return (
		<aside className="flex flex-col gap-4 w-full shadow-sm bg-white p-4 rounded-2xl h-fit max-w-xl animate-pulse">
			<div className="rounded-lg w-full max-w-72 aspect-square mx-auto bg-gray-200" />

			<div>
				<div className="h-8 w-3/4 bg-gray-200 rounded-md mt-2" />

				<div className="h-4 w-1/3 bg-gray-200 rounded-md mt-2" />

				<div className="h-5 w-32 bg-gray-200 rounded-md mt-6" />

				<div className="space-y-2 mt-3">
					<div className="h-3 w-full bg-gray-200 rounded" />
					<div className="h-3 w-full bg-gray-200 rounded" />
					<div className="h-3 w-5/6 bg-gray-200 rounded" />
					<div className="h-3 w-4/6 bg-gray-200 rounded" />
				</div>
			</div>
		</aside>
	);
};
