import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/podcast/$potcastId/")({
	component: RouteComponent,
});

function RouteComponent() {
	const params = Route.useParams();
	console.log("params", params);
	const {data: poscast, isPending, isFetching} = useQuery({
		queryKey: ["podcast", params.potcastId],
		queryFn: async () => {
			return fetch(
				`https://itunes.apple.com/lookup?id=${params.potcastId}&media=podcast&entity=podcastEpisode&limit=20`
			).then((res) => res.json());
		},
		select: (data) => {
			return data.results[0];
		},
		staleTime: 1000 * 60 * 5, // 5 minutos
	})
	console.log("poscast", poscast);	
	return <div>Hello "/$potcastId/"!</div>;
}
