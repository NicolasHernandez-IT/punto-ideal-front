export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Detalle del Producto {params.id}</h1>
      <p className="text-gray-600 mt-2">Página en construcción</p>
    </div>
  );
}
