export const EpisodeAside = ({
	artworkUrl600,
	collectionName,
	artistName,
	description,
}: any) => {
	return (
		<aside className="flex flex-col gap-4 w-full shadow-sm bg-white p-4 rounded-2xl h-fit max-w-xl">
			<img
				src={artworkUrl600}
				alt={collectionName}
				className="rounded-lg max-w-72 mx-auto"
			/>
			<div className="">
				<h1 className="text-2xl font-bold mt-2">{collectionName}</h1>
				<p className="text-gray-500">by {artistName}</p>
				<p className="mt-4">Descripción:</p>
				<p className="text-sm text-gray-500">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
					voluptatibus esse quis vel sint dolorum ipsum veritatis omnis sunt,
					doloremque illo. Rerum mollitia accusamus at possimus sit, officia
					distinctio magni.
				</p>
			</div>
		</aside>
	);
};
