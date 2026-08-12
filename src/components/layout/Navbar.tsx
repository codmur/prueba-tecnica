import { Link, useLocation } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

export const Navbar = () => {
	const location = useLocation();
	console.log("location", location);
	return (
		<div
			className="flex sticky top-0 z-50 gap-4 w-full"
		>
			<div className="gap-4 flex px-4 mx-4 my-4 py-4  rounded-full bg-white/50 shadow-sm  backdrop-blur-xl w-full max-w-6xl justify-between items-center">
				<Link
					to="/"
					search={{ searchTerm: "" }}
				>
					<h1 className="text-xl font-black hover:cursor-pointer uppercase">
						Listado de podcasts
					</h1>
				</Link>
				{location.pathname !== "/" && (
					<button
						type="button"
						onClick={() => window.history.back()}
						className=" rounded-full hover:cursor-pointer bg-neutral-100 flex items-center px-4 py-2"
					>
						<ChevronLeft className="w-6 h-6" />
						Atrás
					</button>
				)}
			</div>
		</div>
	);
};
