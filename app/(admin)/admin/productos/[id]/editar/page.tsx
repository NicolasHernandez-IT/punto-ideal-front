export default function EditarProductoPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Editar Producto {params.id}
      </h1>
      <p className="text-gray-600">Página en construcción</p>
    </div>
  );
}
