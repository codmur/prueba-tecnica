import { Link } from "@tanstack/react-router";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);
export const Episode = ({
	trackId,
	trackName,
	releaseDate,
	trackTimeMillis,
	podcastId,
}: any) => {
	const dur = dayjs.duration(trackTimeMillis);
	const horas = Math.floor(dur.asHours());
	const minutos = dur.minutes();
	return (
		<Link
			className="flex flex-col gap-2 bg-white hover:cursor-pointer rounded-2xl shadow-sm px-4 py-3 hover:scale-105 transition-transform duration-300 ease-linear"
			to="/podcast/$podcastId/episode/$episodeId"
			params={{
				podcastId: podcastId,
				episodeId: trackId,
			}}
		>
			<h3 className="text-lg font-semibold"> {trackName}</h3>
			<div className="flex justify-between items-center">
				<p className="text-gray-500">
					{releaseDate ? dayjs(releaseDate).format("DD/MM/YYYY") : "Sin fecha"}
				</p>
				<p className="text-gray-500 text-sm">{`${horas}h ${minutos}m`} </p>
			</div>
		</Link>
	);
};
