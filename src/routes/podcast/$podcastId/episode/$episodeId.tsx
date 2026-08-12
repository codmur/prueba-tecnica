import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { EpisodeAside } from "#/components/poscast/EpisodeAside";
import { AsideSkeleton } from "#/components/skeletons/AsideSkeleton";
import { podcastQueries } from "#/queries/podcastQueries";

export const Route = createFileRoute("/podcast/$podcastId/episode/$episodeId")({
	component: RouteComponent,
});

function RouteComponent() {
	const params = Route.useParams();
	const { data: poscast, isPending } = useQuery(
		podcastQueries.podcastDetail({
			podcastId: params.podcastId,
		}),
	);

	const filterEpisode = poscast?.results?.find(
		(episode) => episode?.trackId?.toString() === params?.episodeId, // Un pequeño apaño de tipos
	);

	console.log(filterEpisode);

	return (
		<div className="py-4 px-6">
			<div className="grid md:grid-cols-8 gap-4">
				<div className="md:sticky top-10 h-fit flex justify-center mt-20 col-span-3 mb-20">
					{isPending ? (
						<AsideSkeleton />
					) : (
						<EpisodeAside
							podcastId={params.podcastId}
							artworkUrl600={poscast?.results[0]?.artworkUrl600}
							collectionName={poscast?.results[0]?.collectionName}
							artistName={poscast?.results[0]?.artistName}
							description={
								poscast?.results?.[1]?.description || "No encontrada"
							}
						/>
					)}
				</div>
				<main className="flex flex-col gap-4 w-full col-span-5 bg-white rounded-2xl p-4 shadow-sm mt-20 h-fit">
					<h4 className="text-xl font-bold pb-1">{filterEpisode?.trackName}</h4>
					<div
						className="text-sm text-neutral-600 prose max-w-none"
						dangerouslySetInnerHTML={{
							__html: filterEpisode?.description ?? "",
						}}
					>
						{filterEpisode?.detalle}
					</div>
					<div
						className={
							isPending ? "max-w-4xl mt-auto opacity-15" : "max-w-4xl mt-auto"
						}
					>
						<audio
							controls
							src={filterEpisode?.description}
							className="w-full"
						/>
					</div>
				</main>
			</div>
		</div>
	);
}
