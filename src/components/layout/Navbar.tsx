import { getRouteApi } from "@tanstack/react-router";

const routeApi = getRouteApi("/");
export const Navbar = () => {
	const navigate = routeApi.useNavigate();
	return (
		<div
			className="flex sticky top-0 z-50 gap-4 mx-auto justify-center w-full"
			onClick={() => navigate({ to: "/" })}
		>
			<div className="gap-4 py-2 flex px-10 max-w-xl rounded-2xl bg-white/20 shadow-lg shadow-black/10 backdrop-blur-xl w-full max-w-6xl">
				<h1 className="text-2xl font-bold hover:cursor-pointer text-center">
					Listado de podcasts
				</h1>
			</div>
		</div>
	);
};
