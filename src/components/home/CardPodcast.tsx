export const CardComponent = ({ podcast }: { podcast: any }) => {
	return (
		<div className="flex flex-col gap-4 rounded-2xl  p-4 shadow-md h-full">
			<div className="flex justify-center items-center">
				<img
					src={podcast["im:image"][2].label}
					alt={podcast["im:name"].label}
					className="w-full h-auto rounded-full max-w-42"
				/>
			</div>

			<h2 className="text-lg font-bold text-center">
				{podcast["im:name"].label}
			</h2>
			<div className="mt-auto rounded-3xl bg-neutral-200 w-fit px-2 py-1 text-sm">
				{podcast["im:artist"].label}
			</div>
		</div>
	);
};
