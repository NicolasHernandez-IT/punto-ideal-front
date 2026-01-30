export default function StockPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Gestión de Stock - Producto {params.id}
      </h1>
      <p className="text-gray-600">Página en construcción</p>
    </div>
  );
}
