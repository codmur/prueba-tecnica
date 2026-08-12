export const CardSkeleton = () => {
	return (
		<div className="flex flex-col gap-4 rounded-2xl bg-white  p-4 shadow-xl border border-neutral-100 h-full hover:scale-105 transition-transform duration-300 ease-linear hover:cursor-pointer opacity-60">
			<div className=" rounded-full w-42 h-42 bg-neutral-200 animate-pulse mx-auto" />
			<div className="text-lg font-bold text-center w-full bg-neutral-200 animate-pulse h-6 rounded-md" />
			<div className="mt-auto rounded-3xl bg-neutral-200 px-2 py-1 text-sm h-3 w-10" />
		</div>
	);
};
