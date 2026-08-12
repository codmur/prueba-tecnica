import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Episode } from "#/components/poscast/Episode";
import { EpisodeAside } from "#/components/poscast/EpisodeAside";

export const Route = createFileRoute("/podcast/$podcastId")({
	loader: async ({ params, context: { queryClient } }) => {
		await queryClient.ensureQueryData({
			queryKey: ["podcast", params.podcastId],
			queryFn: async () => {
				return fetch(
					`https://itunes.apple.com/lookup?id=${params.podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
				).then((res) => res.json());
			},
		});
	},
	component: RouteComponent,
});

function RouteComponent() {
	const params = Route.useParams();
	const { data: poscast } = useQuery({
		queryKey: ["podcast", params.podcastId],
		queryFn: async () => {
			return fetch(
				`https://itunes.apple.com/lookup?id=${params.podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
			).then((res) => res.json());
		},
		staleTime: 1000 * 60 * 5, // 5 minutos
	});
	return (
		<div className="py-4 px-6">
			<div className="grid md:grid-cols-8 gap-4">
				<div className="sticky top-10 h-fit flex justify-center mt-20 col-span-3">
					<EpisodeAside
						podcastId={params.podcastId}
						artworkUrl600={poscast?.results[0]?.artworkUrl600}
						collectionName={poscast?.results[0]?.collectionName}
						artistName={poscast?.results[0]?.artistName}
						description="descripcion cambiar"
					/>
				</div>
				<main className="flex flex-col gap-4 w-full  col-span-5">
					<h2 className="text-xl font-bold pb-1 border-b">
						Episodios {poscast?.resultCount - 1}
					</h2>
					<div className="flex flex-col gap-4">
						{poscast?.results?.lenght > 1 && <p>No hay episodios</p>}
						{poscast?.results.slice(1).map(
							(
								episode: any, // Quita el primer elemento
							) => (
								<Episode
									key={episode.trackId}
									trackName={episode.trackName}
									releaseDate={episode.releaseDate}
									trackTimeMillis={episode.trackTimeMillis}
								/>
							),
						)}
					</div>
				</main>
			</div>
		</div>
	);
}
