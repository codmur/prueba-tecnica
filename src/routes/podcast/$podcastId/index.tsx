import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Episode } from "#/components/poscast/Episode";
import { EpisodeAside } from "#/components/poscast/EpisodeAside";
import { AsideSkeleton } from "#/components/skeletons/AsideSkeleton";
import { EpisodeSkeleton } from "#/components/skeletons/EpisodeSqueleton";
import { podcastQueries } from "#/queries/podcastQueries";

export const Route = createFileRoute("/podcast/$podcastId/")({
	loader: async ({ params, context: { queryClient } }) => {
		queryClient.ensureQueryData(
			podcastQueries.podcastDetail({
				podcastId: params.podcastId,
			}),
		);
	},
	component: RouteComponent,
});

function RouteComponent() {
	const params = Route.useParams(); // Me gusta deja params porque así no me lio
	const { data: poscast, isPending } = useQuery(
		podcastQueries.podcastDetail({
			podcastId: params.podcastId,
		}),
	);

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
								poscast?.results?.[1]?.description || "No encuentro en el detalle la descripción solo fuera"
							}
						/>
					)}
				</div>
				<main className="flex flex-col gap-4 w-full  col-span-5">
					<h2 className="text-xl font-bold pb-1 border-b">
						Episodios {(poscast?.resultCount ?? 1) - 1}
					</h2>
					<div className="flex flex-col gap-4 p-5">
						{poscast?.results?.lenght > 1 && !isPending && (
							<p>No hay episodios</p>
						)}
						{isPending && <EpisodeSkeleton />}
						{poscast?.results.slice(1).map(
							(
								episode: any, // Quita el primer elemento
							) => (
								<Episode
									key={episode.trackId}
									trackId={episode.trackId}
									trackName={episode.trackName}
									releaseDate={episode.releaseDate}
									trackTimeMillis={episode.trackTimeMillis}
									podcastId={params.podcastId}
								/>
							),
						)}
					</div>
				</main>
			</div>
		</div>
	);
}
