import { queryOptions } from "@tanstack/react-query";

export const podcastQueries = {
	all: () => ["podcast"] as const,
	podcastList: () =>
		queryOptions({
			queryKey: [...podcastQueries.all(), "listado-podcasts"], // TODO: Cambiar a ["listado-podcasts", debouncedSearchTerm] cuando la API permita filtrar por nombre de podcast
			queryFn: async () => {
				return fetch(
					"https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
				).then((res) => res.json());
			},
			select: (data) => {
				return data?.feed?.entry || [];
			},
			staleTime: 1000 * 60 * 5,
		}),
	podcastDetail: ({ podcastId }: { podcastId: string }) =>
		queryOptions({
			queryKey: ["podcast", podcastId],
			queryFn: async () => {
				return fetch(
					`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
				).then((res) => res.json());
			},
			staleTime: 1000 * 60 * 5,
		}),
};
