import { Link } from "@tanstack/react-router";
import { SquareArrowOutUpRight } from "lucide-react";

export const EpisodeAside = ({
	podcastId,
	artworkUrl600,
	collectionName,
	artistName,
	description,
}: any) => {
	return (
		<aside className="flex flex-col gap-4 w-full shadow-sm bg-white p-4 rounded-2xl h-fit max-w-xl">
			<Link
				to="/podcast/$podcastId"
				params={{
					podcastId: podcastId,
				}}
			>
				<img
					src={artworkUrl600}
					alt={collectionName}
					className="rounded-lg max-w-72 mx-auto hover:-rotate-4 transition-transform duration-300 ease-linear"
				/>
				<div>
					<h1 className="text-2xl font-bold mt-2 hover:underline flex items-center gap-4 ">
						{collectionName}{" "}
						<SquareArrowOutUpRight className="w-4 h-4 text-neutral-500" />
					</h1>
					<p className="text-gray-500">by {artistName}</p>
				</div>
			</Link>

			<p className="mt-4">Descripción:</p>
			<p className="text-sm text-gray-500 text-ellipsis overflow-hidden">{description}</p>
		</aside>
	);
};
