export default function CategoriaPage({
  params,
}: {
  params: { categoria: string };
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Categoría: {params.categoria}</h1>
      <p className="text-gray-600 mt-2">Página en construcción</p>
    </div>
  );
}
