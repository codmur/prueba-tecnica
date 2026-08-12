import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { CardComponent } from "#/components/home/CardPodcast";
import { CardSkeleton } from "#/components/skeletons/CardSkeleton";
import type { Podcasts } from "#/interfaces/podcast";
import { useDebounce } from "#/lib/hooks/useDebounce";
import { podcastQueries } from "#/queries/podcastQueries";

type ProductSearch = {
	searchTerm: string;
};

export const Route = createFileRoute("/")({
	validateSearch: (search: Record<string, unknown>): ProductSearch => {
		// validate and parse the search params into a typed state
		return {
			searchTerm:
				typeof search.searchTerm === "string" ? search.searchTerm : "",
		};
	},
	loader: async ({ context: { queryClient } }) => {
		queryClient.ensureQueryData(
			podcastQueries.podcastList()
		);
	},
	component: Home,
});

function Home() {
	const { searchTerm } = Route.useSearch();
	const navigate = Route.useNavigate();
	const debouncedSearchTerm = useDebounce(searchTerm, 500);

	const {
		data: listado,
		isPending,
		isFetching,
	} = useQuery(podcastQueries.podcastList());

	const listadoFiltrado = !debouncedSearchTerm // FIXIT: Lo suyo sería filtrar con el searchTerm en la API, pero al no tener el endpoint lo hago manual
		? listado
		: listado?.filter(
				(podcast: Podcasts) =>
					podcast["im:name"].label
						.toLowerCase()
						.includes(debouncedSearchTerm.toLowerCase()) ||
					podcast["im:artist"].label
						.toLowerCase()
						.includes(debouncedSearchTerm.toLowerCase()),
			);

	const totalNumberOfPodcasts = listadoFiltrado?.length || 0;

	return (
		<div className="py-4 px-6 gap-4 flex flex-col">
			<div className="flex justify-end gap-2 items-baseline mb-15 flex-wrap">
				<div className="text-sm text-gray-500 bg-blue-500/20 rounded-full py-2 px-4">
					{totalNumberOfPodcasts} encontrados
				</div>
				<div className="flex items-center justify-center rounded-2xl bg-neutral-100 w-full max-w-xl">
					<div className="flex items-center justify-center px-2">
						{searchTerm !== debouncedSearchTerm || isFetching || isPending ? (
							<div className="w-6 h-6 border-4 border-t-transparent border-neutral-400 rounded-full animate-spin" />
						) : (
							<Search className="w-6 h-6 text-neutral-400" />
						)}
					</div>
					<input
						type="text"
						className="py-4 px-2 w-full max-w-xl rounded-2xl bg-neutral-200 rounded-l-none"
						placeholder="Buscar podcast..."
						value={searchTerm}
						onChange={(e) =>
							navigate({ search: { searchTerm: e.target.value } })
						}
					/>
				</div>
			</div>
			<div
				className={
					isFetching
						? "grid grid-cols-1 gap-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 opacity-60"
						: "grid grid-cols-1 gap-4 gap-y-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
				}
			>
				{!isPending && listadoFiltrado?.length === 0 && (
					<div className="col-span-full text-center text-lg font-semibold">
						No se encontraron podcasts para la búsqueda: "{searchTerm}"
					</div>
				)}
				{
					isPending &&
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						[...Array(10)].map((_, index) => <CardSkeleton key={index} />) // No se suele usar pero al ser un skeleton lo puedo meter
				}

				{listadoFiltrado?.map((podcast: Podcasts) => (
					<Link
						key={podcast.id.attributes["im:id"]}
						to={`/podcast/$podcastId`}
						params={{ podcastId: podcast.id.attributes["im:id"] }}
					>
						<CardComponent podcast={podcast} />
					</Link>
				))}
			</div>
		</div>
	);
}
