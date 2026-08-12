import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$potcastId/")({
	component: RouteComponent,
});

function RouteComponent() {
	const params = Route.useParams();
	console.log("params", params);
	return <div>Hello "/$potcastId/"!</div>;
}
