import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CardComponent } from "#/components/home/CardPodcast";
import { CardSkeleton } from "#/components/skeletons/CardSkeleton";
import type { Podcast } from "#/interfaces/podcast";
import { useDebounce } from "#/lib/hooks/useDebounce";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	const navigate = Route.useNavigate();
	const [searchTerm, setSearchTerm] = useState("");
	const debouncedSearchTerm = useDebounce(searchTerm, 500);
	const {
		data: listado,
		isPending,
		isFetching,
	} = useQuery({
		queryKey: ["listado-podcasts", debouncedSearchTerm],
		queryFn: async () => {
			// Lo suyo sería filtrar con el searchTerm, pero la API no permite filtrar por nombre de podcast, así que lo hago en el front
			return fetch(
				"https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
			).then((res) => res.json());
		},
		select: (data) => {
			if (!searchTerm) return data.feed.entry;
			return data.feed.entry.filter(
				(podcast: Podcast) =>
					// podcast.title.label.toLowerCase().includes(searchTerm.toLowerCase())
					podcast["im:name"].label
						.toLowerCase()
						.includes(searchTerm.toLowerCase()) ||
					podcast["im:artist"].label
						.toLowerCase()
						.includes(searchTerm.toLowerCase()),
			);
		},
		staleTime: 1000 * 60 * 5, // 5 minutos
	});

	return (
		<div className="p-4 gap-4 flex flex-col">
			<div className="flex justify-end align-bottom">
				<input
					type="text"
					className="py-4 px-2 w-full max-w-xl rounded-2xl bg-neutral-200"
					placeholder="Buscar podcast..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>
			<div
				className={
					isFetching
						? "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 opacity-60"
						: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
				}
			>
        {
          !isPending && listado?.length === 0 && (
            <div className="col-span-full text-center text-lg font-semibold">
              No se encontraron podcasts para la búsqueda: "{searchTerm}"
            </div>
          )
        }
				{
					isPending &&
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						[...Array(10)].map((_, index) => <CardSkeleton key={index} />) // No se suele usar pero al ser un skeleton lo puedo meter
				}
				{listado?.map((podcast: Podcast) => (
					<div
						key={podcast.id.attributes["im:id"]}
						onClick={() =>
							navigate({
								to: "/$potcastId",
								params: { potcastId: podcast.id.attributes["im:id"] },
							})
						}
					>
						<CardComponent podcast={podcast} />
					</div>
				))}
			</div>
		</div>
	);
}
