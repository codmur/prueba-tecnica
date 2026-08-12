import { Link, useRouterState } from "@tanstack/react-router";
export const Navbar = () => {
	const state = useRouterState();
	return (
		<div className="flex  z-50 gap-4 w-full">
			<div className="gap-4 flex px-4 mx-4 my-4 py-4  rounded-full bg-white shadow-sm  backdrop-blur-xl w-full justify-between items-center">
				<Link to="/" search={{ searchTerm: "" }}>
					<h1 className="text-xl font-black hover:cursor-pointer uppercase text-gray-950">
						Podcaster{" "}
						<span className="font-bold text-gray-400 text-sm hidden md:inline">
							de Juan Peñalver
						</span>
					</h1>
				</Link>
				{/* {location.pathname !== "/" && (
					<Link
						type="button"
						to="/"
						search={{ searchTerm: "" }}
						className=" rounded-full hover:cursor-pointer bg-neutral-100 flex items-center px-4 py-2 text-sm"
					>
						<ChevronLeft className="w-6 h-6" />
						Atrás
					</Link>
				)} */}
				{state?.isLoading && (
					<div className="h-5 w-5 rounded-full animate-ping bg-green-500" />
				)}
			</div>
		</div>
	);
};
