import { Link } from "@tanstack/react-router";

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
				<div className="">
					<h1 className="text-2xl font-bold mt-2">{collectionName}</h1>
					<p className="text-gray-500">by {artistName}</p>
					<p className="mt-4">Descripción:</p>
					<p className="text-sm text-gray-500">{description}</p>
				</div>
			</Link>
		</aside>
	);
};
