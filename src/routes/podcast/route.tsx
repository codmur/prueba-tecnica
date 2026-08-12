import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/podcast")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<Outlet />
		</div>
	);
}
