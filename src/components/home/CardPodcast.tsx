import { SquareArrowOutUpRight } from "lucide-react";
import type { Podcast } from "#/interfaces/podcast";

export const CardComponent = ({ podcast }: { podcast: Podcast }) => {
	return (
		<div className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-xl border border-neutral-100 h-full hover:scale-105 transition-transform duration-300 ease-linear hover:cursor-pointer">
			<div className="flex justify-end">
					<SquareArrowOutUpRight className="inline-block ml-2 w-4 h-4 text-neutral-500 " />
				</div>
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
