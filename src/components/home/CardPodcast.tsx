import { SquareArrowOutUpRight } from "lucide-react";
import type { Podcasts } from "#/interfaces/podcast";

export const CardComponent = ({ podcast }: { podcast: Podcasts }) => {
	return (
		<div className="relative flex flex-col gap-4 rounded-2xl bg-white p-4 pt-20 shadow-xl border border-neutral-100 h-full hover:scale-105 transition-transform duration-300 ease-linear cursor-pointer">



			<div className="absolute left-1/2 -translate-x-1/2 -top-12 z-10">
				<img
					src={podcast["im:image"][2].label}
					alt={podcast["im:name"].label}
					className="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-white"
				/>
			</div>

			<h2 className="text-lg font-bold text-center">
				{podcast["im:name"].label}
			</h2>

			<div className="mt-auto w-full flex justify-end">
				<div className="rounded-3xl bg-neutral-200 w-fit px-3 py-2 text-sm flex items-center gap-2">
					{podcast["im:artist"].label} 				<SquareArrowOutUpRight className="w-4 h-4 text-neutral-500" />

				</div>
			</div>
		</div>
	);
};
