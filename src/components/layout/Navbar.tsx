import { Link, useRouterState } from "@tanstack/react-router";
export const Navbar = () => {
	const state = useRouterState();
	return (
		<div className="flex  z-50 gap-4 w-full">
			<div className="gap-4 flex px-4 mx-4 my-4 py-4  rounded-full bg-white shadow-sm  backdrop-blur-xl w-full justify-between items-center">
				<Link to="/" search={{ searchTerm: "" }}>
					<h1 className="text-xl font-black hover:cursor-pointer uppercase text-gray-950">
						Podcaster{" "}
						<span className="font-bold text-gray-400 text-sm hidden md:inline text-[12px]">
							Juan Peñalver
						</span>
					</h1>
				</Link>
				{state?.isLoading && (
					<div className="h-5 w-5 rounded-full animate-ping bg-green-500" />
				)}
			</div>
		</div>
	);
};
