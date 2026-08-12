import { Link } from "@tanstack/react-router";

export const NotFoundComponent = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <span className="text-8xl font-bold text-neutral-200">404</span>

      <div>
        <h1 className="text-2xl font-semibold">
          Página no encontrada
        </h1>

        <p className="mt-2 text-neutral-500">
          La ruta que buscas no existe o ha sido eliminada.
        </p>
      </div>

      <Link
        to={"/"}
        search={
          {
            searchTerm: ""
          }
        }
       
        className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
      >
        Volver al inicio
      </Link>
    </div>
  );
};