import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { CardComponent } from "#/components/home/CardPodcast";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	// Primera prueba con la llamada a los datos para comprobarlos
	const { data: listado } = useQuery({
		queryKey: ["listado-podcasts"],
		queryFn: async () => {
			return fetch(
				"https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
			).then((res) => res.json());
		},
		select: (data) => data.feed.entry,
	});
	console.log(listado);
	return (
		<div className="p-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			{/* Hay que hacer un layout */}
			{listado?.map((podcast: any) => (
				<CardComponent key={podcast.id.attributes["im:id"]} podcast={podcast} />
			))}
		</div>
	);
}
